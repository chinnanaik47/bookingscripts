(function () {
  'use strict';
  /*** USER CONFIG ***/
  const RETRY_START_TIME_STR = '09:59:30:000'; // Format: HH:MM:SS:ms
  const CLICK_RETRY_INTERVAL = 1; // ms between retries when clicking transport link
  const NO_RECORDS_TEXT = 'No Records Found'; // Text to trigger reload
  const TARGET_TEXT = 'Bowrampet SB Coarse Scap';
  const NO_RECORDS_RETRY_INTERVAL = 10;
  let retryIntervalId = null;
  let clickDone = false;
  let noRecordsIntervalId = null;
  /*** FASTER TIME FUNCTION ***/
  function getDelayUntilStart() {
    const [hh,
    mm,
    ss,
    ms] = RETRY_START_TIME_STR.split(':').map(Number);
    const target = new Date();
    target.setHours(hh, mm, ss, ms);
    const delay = target.getTime() - Date.now();
    return delay > 0 ? delay : 0;
  }
  function isBookingPage() {
    return location.pathname.includes('/InnerPages/SandBazaarBookingNew.aspx');
  }
  function startRetryClicking() {
      if (isBookingPage()) {
        console.log("Script Started listening")
        retry();
        return;
      }
  }
  function retry() {
    if (noRecordsIntervalId) return;
    noRecordsIntervalId = setInterval(() =>{
      const bodyText = document.body ? document.body.textContent : '';
      // Reload if target text NOT found (regardless of other text)
      if (!bodyText.toLowerCase().includes(TARGET_TEXT.toLowerCase())) {
        location.reload();
        clearInterval(noRecordsIntervalId);
        noRecordsIntervalId = null;
      }      // Reload if "No Records Found" text appears
       else if (bodyText.includes(NO_RECORDS_TEXT)) {
        location.reload();
        clearInterval(noRecordsIntervalId);
        noRecordsIntervalId = null;
      }      // Otherwise, target present and no errors, stop retrying
       else {
        clearInterval(noRecordsIntervalId);
        noRecordsIntervalId = null;
      }
    }, NO_RECORDS_RETRY_INTERVAL);
  }
  function initAutomationAtScheduledTime() {
    const delay = getDelayUntilStart();
    if (delay == 0) {
      startRetryClicking();
    } else {
      setTimeout(() =>startRetryClicking(), delay);
    }
  }  /*** PAGE ENTRY ***/

  window.addEventListener('DOMContentLoaded', () =>{
    sessionStorage.setItem("sandAutoFilled", "no");
    initAutomationAtScheduledTime();
  });
}) ();
