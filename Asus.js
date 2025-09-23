// ==UserScript==
// @name     Sand Bazar OWN TRANSPORT BOOKING Ultra-Fast Auto-Click with Only "No Records Found" Handler (No Retry Limit)
// @namespace  http://tampermonkey.net/
// @version   3.3
// @description Starts retry clicking OWN TRANSPORT BOOKING at given precise time with millisecond accuracy, retries booking page if "No Records Found" appears, no retry time limit
// @match    https://sand.telangana.gov.in/TGSandBazaar/InnerPages/SandBazaarBookingNew.aspx
// @grant    none
// ==/UserScript==
(function () {
  'use strict';
  /*** USER CONFIG ***/
  const RETRY_START_TIME_STR = '08:48:00:000'; // Format: HH:MM:SS:ms
  const CLICK_RETRY_INTERVAL = 1; // ms between retries when clicking transport link
  const NO_RECORDS_TEXT = 'No Records Found'; // Text to trigger reload
  const TARGET_TEXT = 'Adibatla SB Coarse';
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
