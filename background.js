'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3b5998'}, function() {
    console.log('The color is Facebook Blue.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'https://www.facebook.com'},
        pageUrl: {hostEquals: 'www.facebook.com'},
		
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
