<template>
    <main>
        <h1 class="text-3xl font-bold">
            Universal 2-Factor Authentication
        </h1>

        <div class="main container">
          <div class="main row">
            <div class="twelve columns">
              <h1>U2F Test Page</h1>
              <p>
                Made by <a href="https://sagen.me/">Alexander Sagen</a>, using code from <a href="https://github.com/ashtuchkin/u2f">ashtuchkin/u2f</a> and <a href="https://github.com/google/u2f-ref-code">google/u2f-ref-code</a>. Styled with <a href="http://getskeleton.com/">Skeleton</a>.
              </p>
            </div>
          </div>

          <div class="row">
              <div class="twelve columns">
                  <button @click="handleRequestClick">Generate Request</button>
              </div>
          </div>

          <div class="row">
              <div class="twelve columns">
                  <label for="request">Request</label>
                  <textarea @change="handleRequestChange" class="u-full-width"></textarea>
              </div>
          </div>

          <div class="row">
            <div class="six columns">
              <label for="reqAppId">appId</label>
              <input class="u-full-width" type="text" id="reqAppId" readonly="">
            </div>
            <div class="six columns">
              <label for="reqKeyHandle">keyHandle</label>
              <input class="u-full-width" type="text" id="reqKeyHandle">
            </div>
          </div>
          <div class="row">
            <div class="twelve columns">
              <button id="btnSign">Sign</button>
              <button id="btnRegister">Register</button>
            </div>
          </div>
          <div class="row">
            <div class="twelve columns">
              <label for="response">Response</label>
              <textarea class="u-full-width" id="response" readonly=""></textarea>
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <label for="resKeyHandle">keyHandle</label>
              <input class="u-full-width" type="text" id="resKeyHandle" readonly="">
            </div>
            <div class="six columns">
              <label for="resPublicKey">publicKey</label>
              <input class="u-full-width" type="text" id="resPublicKey" readonly="">
            </div>
          </div>
          <div class="row">
            <div class="twelve columns">
              <label for="resCertificate">certificate</label>
              <input class="u-full-width" type="text" id="resCertificate" readonly="">
            </div>
          </div>
        </div>

    </main>
</template>

<script>
/* global chrome */

/**
 * This page was sourced from:
 * https://alexander.sagen.me/u2f-test-page/
 */

/* Import components. */
// import UnderConstruction from '@/components/UnderConstruction'

export default {
    components: {
        // UnderConstruction,
    },
    data: () => {
        return {
            //
        }
    },
    computed: {
        //
    },
    methods: {
        handleRequestClick() {
            const challenge = new Uint8Array(32)

            crypto.getRandomValues(challenge)

            request.value = JSON.stringify({
                version: 'U2F_V2',
                appId: location.origin,
                keyHandle: reqKeyHandle.value || undefined,
                challenge: B64_encode(challenge),
            })

        },

        handleRequestChange(_request) {
            try {
                const value = JSON.parse(_request.value)

                if (value.appId != location.origin) {
                    _request.value = ''

                    console.error("Invalid appId in request, either generate one here or use the appId specified on this page when generating one");
                }
            } catch (e) {
                console.error(e);
                _request.value = ''
                console.error("Invalid JSON input for request");
            }
        },

    },
    created: async function () {

        //Copyright 2014-2015 Google Inc. All rights reserved.

        //Use of this source code is governed by a BSD-style
        //license that can be found in the LICENSE file or at
        //https://developers.google.com/open-source/licenses/bsd

        var u2f = u2f || {};

        /**
         * FIDO U2F Javascript API Version
         * @number
         */
        var js_api_version;

        /**
         * The U2F extension id
         * @const {string}
         */
        // The Chrome packaged app extension ID.
        // Uncomment this if you want to deploy a server instance that uses
        // the package Chrome app and does not require installing the U2F Chrome extension.
         u2f.EXTENSION_ID = 'kmendfapggjehodndflmmgagdbamhnfd';
        // The U2F Chrome extension ID.
        // Uncomment this if you want to deploy a server instance that uses
        // the U2F Chrome extension to authenticate.
        // u2f.EXTENSION_ID = 'pfboblefjcgdjicmnffhdgionmgcdmne';


        /**
         * Message types for messsages to/from the extension
         * @const
         * @enum {string}
         */
        u2f.MessageTypes = {
            'U2F_REGISTER_REQUEST': 'u2f_register_request',
            'U2F_REGISTER_RESPONSE': 'u2f_register_response',
            'U2F_SIGN_REQUEST': 'u2f_sign_request',
            'U2F_SIGN_RESPONSE': 'u2f_sign_response',
            'U2F_GET_API_VERSION_REQUEST': 'u2f_get_api_version_request',
            'U2F_GET_API_VERSION_RESPONSE': 'u2f_get_api_version_response'
        };


        /**
         * Response status codes
         * @const
         * @enum {number}
         */
        u2f.ErrorCodes = {
            'OK': 0,
            'OTHER_ERROR': 1,
            'BAD_REQUEST': 2,
            'CONFIGURATION_UNSUPPORTED': 3,
            'DEVICE_INELIGIBLE': 4,
            'TIMEOUT': 5
        };


        /**
         * A message for registration requests
         * @typedef {{
         *   type: u2f.MessageTypes,
         *   appId: ?string,
         *   timeoutSeconds: ?number,
         *   requestId: ?number
         * }}
         */
        u2f.U2fRequest;


        /**
         * A message for registration responses
         * @typedef {{
         *   type: u2f.MessageTypes,
         *   responseData: (u2f.Error | u2f.RegisterResponse | u2f.SignResponse),
         *   requestId: ?number
         * }}
         */
        u2f.U2fResponse;


        /**
         * An error object for responses
         * @typedef {{
         *   errorCode: u2f.ErrorCodes,
         *   errorMessage: ?string
         * }}
         */
        u2f.Error;

        /**
         * Data object for a single sign request.
         * @typedef {enum {BLUETOOTH_RADIO, BLUETOOTH_LOW_ENERGY, USB, NFC}}
         */
        u2f.Transport;


        /**
         * Data object for a single sign request.
         * @typedef {Array<u2f.Transport>}
         */
        u2f.Transports;

        /**
         * Data object for a single sign request.
         * @typedef {{
         *   version: string,
         *   challenge: string,
         *   keyHandle: string,
         *   appId: string
         * }}
         */
        u2f.SignRequest;


        /**
         * Data object for a sign response.
         * @typedef {{
         *   keyHandle: string,
         *   signatureData: string,
         *   clientData: string
         * }}
         */
        u2f.SignResponse;


        /**
         * Data object for a registration request.
         * @typedef {{
         *   version: string,
         *   challenge: string
         * }}
         */
        u2f.RegisterRequest;


        /**
         * Data object for a registration response.
         * @typedef {{
         *   version: string,
         *   keyHandle: string,
         *   transports: Transports,
         *   appId: string
         * }}
         */
        u2f.RegisterResponse;


        /**
         * Data object for a registered key.
         * @typedef {{
         *   version: string,
         *   keyHandle: string,
         *   transports: ?Transports,
         *   appId: ?string
         * }}
         */
        u2f.RegisteredKey;


        /**
         * Data object for a get API register response.
         * @typedef {{
         *   js_api_version: number
         * }}
         */
        u2f.GetJsApiVersionResponse;


        //Low level MessagePort API support

        /**
         * Sets up a MessagePort to the U2F extension using the
         * available mechanisms.
         * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
         */
        u2f.getMessagePort = function(callback) {
          if (typeof chrome != 'undefined' && chrome.runtime) {
            // The actual message here does not matter, but we need to get a reply
            // for the callback to run. Thus, send an empty signature request
            // in order to get a failure response.
            var msg = {
                type: u2f.MessageTypes.U2F_SIGN_REQUEST,
                signRequests: []
            };
            chrome.runtime.sendMessage(u2f.EXTENSION_ID, msg, function() {
              if (!chrome.runtime.lastError) {
                // We are on a whitelisted origin and can talk directly
                // with the extension.
                u2f.getChromeRuntimePort_(callback);
              } else {
                // chrome.runtime was available, but we couldn't message
                // the extension directly, use iframe
                u2f.getIframePort_(callback);
              }
            });
          } else if (u2f.isAndroidChrome_()) {
            u2f.getAuthenticatorPort_(callback);
          } else if (u2f.isIosChrome_()) {
            u2f.getIosPort_(callback);
          } else {
            // chrome.runtime was not available at all, which is normal
            // when this origin doesn't have access to any extensions.
            u2f.getIframePort_(callback);
          }
        };

        /**
         * Detect chrome running on android based on the browser's useragent.
         * @private
         */
        u2f.isAndroidChrome_ = function() {
          var userAgent = navigator.userAgent;
          return userAgent.indexOf('Chrome') != -1 &&
          userAgent.indexOf('Android') != -1;
        };

        /**
         * Detect chrome running on iOS based on the browser's platform.
         * @private
         */
        u2f.isIosChrome_ = function() {
          return ["iPhone", "iPad", "iPod"].indexOf(navigator.platform) > -1;
        };

        /**
         * Connects directly to the extension via chrome.runtime.connect.
         * @param {function(u2f.WrappedChromeRuntimePort_)} callback
         * @private
         */
        u2f.getChromeRuntimePort_ = function(callback) {
          var port = chrome.runtime.connect(u2f.EXTENSION_ID,
              {'includeTlsChannelId': true});
          setTimeout(function() {
            callback(new u2f.WrappedChromeRuntimePort_(port));
          }, 0);
        };

        /**
         * Return a 'port' abstraction to the Authenticator app.
         * @param {function(u2f.WrappedAuthenticatorPort_)} callback
         * @private
         */
        u2f.getAuthenticatorPort_ = function(callback) {
          setTimeout(function() {
            callback(new u2f.WrappedAuthenticatorPort_());
          }, 0);
        };

        /**
         * Return a 'port' abstraction to the iOS client app.
         * @param {function(u2f.WrappedIosPort_)} callback
         * @private
         */
        u2f.getIosPort_ = function(callback) {
          setTimeout(function() {
            callback(new u2f.WrappedIosPort_());
          }, 0);
        };

        /**
         * A wrapper for chrome.runtime.Port that is compatible with MessagePort.
         * @param {Port} port
         * @constructor
         * @private
         */
        u2f.WrappedChromeRuntimePort_ = function(port) {
          this.port_ = port;
        };

        /**
         * Format and return a sign request compliant with the JS API version supported by the extension.
         * @param {Array<u2f.SignRequest>} signRequests
         * @param {number} timeoutSeconds
         * @param {number} reqId
         * @return {Object}
         */
        u2f.formatSignRequest_ =
          function(appId, challenge, registeredKeys, timeoutSeconds, reqId) {
          if (js_api_version === undefined || js_api_version < 1.1) {
            // Adapt request to the 1.0 JS API
            var signRequests = [];
            for (let i = 0; i < registeredKeys.length; i++) {
              signRequests[i] = {
                  version: registeredKeys[i].version,
                  challenge: challenge,
                  keyHandle: registeredKeys[i].keyHandle,
                  appId: appId
              };
            }
            return {
              type: u2f.MessageTypes.U2F_SIGN_REQUEST,
              signRequests: signRequests,
              timeoutSeconds: timeoutSeconds,
              requestId: reqId
            };
          }
          // JS 1.1 API
          return {
            type: u2f.MessageTypes.U2F_SIGN_REQUEST,
            appId: appId,
            challenge: challenge,
            registeredKeys: registeredKeys,
            timeoutSeconds: timeoutSeconds,
            requestId: reqId
          };
        };

        /**
         * Format and return a register request compliant with the JS API version supported by the extension..
         * @param {Array<u2f.SignRequest>} signRequests
         * @param {Array<u2f.RegisterRequest>} signRequests
         * @param {number} timeoutSeconds
         * @param {number} reqId
         * @return {Object}
         */
        u2f.formatRegisterRequest_ =
          function(appId, registeredKeys, registerRequests, timeoutSeconds, reqId) {
          if (js_api_version === undefined || js_api_version < 1.1) {
            // Adapt request to the 1.0 JS API
            for (let i = 0; i < registerRequests.length; i++) {
              registerRequests[i].appId = appId;
            }
            var signRequests = [];
            for (let i = 0; i < registeredKeys.length; i++) {
              signRequests[i] = {
                  version: registeredKeys[i].version,
                  challenge: registerRequests[0],
                  keyHandle: registeredKeys[i].keyHandle,
                  appId: appId
              };
            }
            return {
              type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
              signRequests: signRequests,
              registerRequests: registerRequests,
              timeoutSeconds: timeoutSeconds,
              requestId: reqId
            };
          }
          // JS 1.1 API
          return {
            type: u2f.MessageTypes.U2F_REGISTER_REQUEST,
            appId: appId,
            registerRequests: registerRequests,
            registeredKeys: registeredKeys,
            timeoutSeconds: timeoutSeconds,
            requestId: reqId
          };
        };


        /**
         * Posts a message on the underlying channel.
         * @param {Object} message
         */
        u2f.WrappedChromeRuntimePort_.prototype.postMessage = function(message) {
          this.port_.postMessage(message);
        };


        /**
         * Emulates the HTML 5 addEventListener interface. Works only for the
         * onmessage event, which is hooked up to the chrome.runtime.Port.onMessage.
         * @param {string} eventName
         * @param {function({data: Object})} handler
         */
        u2f.WrappedChromeRuntimePort_.prototype.addEventListener =
            function(eventName, handler) {
          var name = eventName.toLowerCase();
          if (name == 'message' || name == 'onmessage') {
            this.port_.onMessage.addListener(function(message) {
              // Emulate a minimal MessageEvent object
              handler({'data': message});
            });
          } else {
            console.error('WrappedChromeRuntimePort only supports onMessage');
          }
        };

        /**
         * Wrap the Authenticator app with a MessagePort interface.
         * @constructor
         * @private
         */
        u2f.WrappedAuthenticatorPort_ = function() {
          this.requestId_ = -1;
          this.requestObject_ = null;
        }

        /**
         * Launch the Authenticator intent.
         * @param {Object} message
         */
        u2f.WrappedAuthenticatorPort_.prototype.postMessage = function(message) {
          var intentUrl =
            u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ +
            ';S.request=' + encodeURIComponent(JSON.stringify(message)) +
            ';end';
          document.location = intentUrl;
        };

        /**
         * Tells what type of port this is.
         * @return {String} port type
         */
        u2f.WrappedAuthenticatorPort_.prototype.getPortType = function() {
          return "WrappedAuthenticatorPort_";
        };


        /**
         * Emulates the HTML 5 addEventListener interface.
         * @param {string} eventName
         * @param {function({data: Object})} handler
         */
        u2f.WrappedAuthenticatorPort_.prototype.addEventListener = function(eventName, handler) {
          var name = eventName.toLowerCase();
          if (name == 'message') {
            var self = this;
            /* Register a callback to that executes when
             * chrome injects the response. */
            window.addEventListener(
                'message', self.onRequestUpdate_.bind(self, handler), false);
          } else {
            console.error('WrappedAuthenticatorPort only supports message');
          }
        };

        /**
         * Callback invoked  when a response is received from the Authenticator.
         * @param function({data: Object}) callback
         * @param {Object} message message Object
         */
        u2f.WrappedAuthenticatorPort_.prototype.onRequestUpdate_ =
            function(callback, message) {
          var messageObject = JSON.parse(message.data);
          // var intentUrl = messageObject['intentURL'];

          // var errorCode = messageObject['errorCode'];
          var responseObject = null;
          if (messageObject.hasOwnProperty('data')) { // eslint-disable-line no-prototype-builtins
            responseObject = /** @type {Object} */ (
                JSON.parse(messageObject['data']));
          }

          callback({'data': responseObject});
        };

        /**
         * Base URL for intents to Authenticator.
         * @const
         * @private
         */
        u2f.WrappedAuthenticatorPort_.INTENT_URL_BASE_ =
          'intent:#Intent;action=com.google.android.apps.authenticator.AUTHENTICATE';

        /**
         * Wrap the iOS client app with a MessagePort interface.
         * @constructor
         * @private
         */
        u2f.WrappedIosPort_ = function() {};

        /**
         * Launch the iOS client app request
         * @param {Object} message
         */
        u2f.WrappedIosPort_.prototype.postMessage = function(message) {
          var str = JSON.stringify(message);
          var url = "u2f://auth?" + encodeURI(str);
          location.replace(url);
        };

        /**
         * Tells what type of port this is.
         * @return {String} port type
         */
        u2f.WrappedIosPort_.prototype.getPortType = function() {
          return "WrappedIosPort_";
        };

        /**
         * Emulates the HTML 5 addEventListener interface.
         * @param {string} eventName
         * @param {function({data: Object})} handler
         */
        u2f.WrappedIosPort_.prototype.addEventListener = function(eventName, handler) {
            console.log('handler', handler);
          var name = eventName.toLowerCase();
          if (name !== 'message') {
            console.error('WrappedIosPort only supports message');
          }
        };

        /**
         * Sets up an embedded trampoline iframe, sourced from the extension.
         * @param {function(MessagePort)} callback
         * @private
         */
        u2f.getIframePort_ = function(callback) {
          // Create the iframe
          var iframeOrigin = 'chrome-extension://' + u2f.EXTENSION_ID;
          var iframe = document.createElement('iframe');
          iframe.src = iframeOrigin + '/u2f-comms.html';
          iframe.setAttribute('style', 'display:none');
          document.body.appendChild(iframe);

          var channel = new MessageChannel();
          var ready = function(message) {
            if (message.data == 'ready') {
              channel.port1.removeEventListener('message', ready);
              callback(channel.port1);
            } else {
              console.error('First event on iframe port was not "ready"');
            }
          };
          channel.port1.addEventListener('message', ready);
          channel.port1.start();

          iframe.addEventListener('load', function() {
            // Deliver the port to the iframe and initialize
            iframe.contentWindow.postMessage('init', iframeOrigin, [channel.port2]);
          });
        };



        //High-level JS API

        /**
         * Default extension response timeout in seconds.
         * @const
         */
        u2f.EXTENSION_TIMEOUT_SEC = 30;

        /**
         * A singleton instance for a MessagePort to the extension.
         * @type {MessagePort|u2f.WrappedChromeRuntimePort_}
         * @private
         */
        u2f.port_ = null;

        /**
         * Callbacks waiting for a port
         * @type {Array<function((MessagePort|u2f.WrappedChromeRuntimePort_))>}
         * @private
         */
        u2f.waitingForPort_ = [];

        /**
         * A counter for requestIds.
         * @type {number}
         * @private
         */
        u2f.reqCounter_ = 0;

        /**
         * A map from requestIds to client callbacks
         * @type {Object.<number,(function((u2f.Error|u2f.RegisterResponse))
         *                       |function((u2f.Error|u2f.SignResponse)))>}
         * @private
         */
        u2f.callbackMap_ = {};

        /**
         * Creates or retrieves the MessagePort singleton to use.
         * @param {function((MessagePort|u2f.WrappedChromeRuntimePort_))} callback
         * @private
         */
        u2f.getPortSingleton_ = function(callback) {
          if (u2f.port_) {
            callback(u2f.port_);
          } else {
            if (u2f.waitingForPort_.length == 0) {
              u2f.getMessagePort(function(port) {
                u2f.port_ = port;
                u2f.port_.addEventListener('message',
                    /** @type {function(Event)} */ (u2f.responseHandler_));

                // Careful, here be async callbacks. Maybe.
                while (u2f.waitingForPort_.length)
                  u2f.waitingForPort_.shift()(u2f.port_);
              });
            }
            u2f.waitingForPort_.push(callback);
          }
        };

        /**
         * Handles response messages from the extension.
         * @param {MessageEvent.<u2f.Response>} message
         * @private
         */
        u2f.responseHandler_ = function(message) {
          var response = message.data;
          var reqId = response['requestId'];
          if (!reqId || !u2f.callbackMap_[reqId]) {
            console.error('Unknown or missing requestId in response.');
            return;
          }
          var cb = u2f.callbackMap_[reqId];
          delete u2f.callbackMap_[reqId];
          cb(response['responseData']);
        };

        /**
         * Dispatches an array of sign requests to available U2F tokens.
         * If the JS API version supported by the extension is unknown, it first sends a
         * message to the extension to find out the supported API version and then it sends
         * the sign request.
         * @param {string=} appId
         * @param {string=} challenge
         * @param {Array<u2f.RegisteredKey>} registeredKeys
         * @param {function((u2f.Error|u2f.SignResponse))} callback
         * @param {number=} opt_timeoutSeconds
         */
        u2f.sign = function(appId, challenge, registeredKeys, callback, opt_timeoutSeconds) {
          if (js_api_version === undefined) {
            // Send a message to get the extension to JS API version, then send the actual sign request.
            u2f.getApiVersion(
                function (response) {
                  js_api_version = response['js_api_version'] === undefined ? 0 : response['js_api_version'];
                  console.log("Extension JS API Version: ", js_api_version);
                  u2f.sendSignRequest(appId, challenge, registeredKeys, callback, opt_timeoutSeconds);
                });
          } else {
            // We know the JS API version. Send the actual sign request in the supported API version.
            u2f.sendSignRequest(appId, challenge, registeredKeys, callback, opt_timeoutSeconds);
          }
        };

        /**
         * Dispatches an array of sign requests to available U2F tokens.
         * @param {string=} appId
         * @param {string=} challenge
         * @param {Array<u2f.RegisteredKey>} registeredKeys
         * @param {function((u2f.Error|u2f.SignResponse))} callback
         * @param {number=} opt_timeoutSeconds
         */
        u2f.sendSignRequest = function(appId, challenge, registeredKeys, callback, opt_timeoutSeconds) {
          u2f.getPortSingleton_(function(port) {
            var reqId = ++u2f.reqCounter_;
            u2f.callbackMap_[reqId] = callback;
            var timeoutSeconds = (typeof opt_timeoutSeconds !== 'undefined' ?
                opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC);
            var req = u2f.formatSignRequest_(appId, challenge, registeredKeys, timeoutSeconds, reqId);
            port.postMessage(req);
          });
        };

        /**
         * Dispatches register requests to available U2F tokens. An array of sign
         * requests identifies already registered tokens.
         * If the JS API version supported by the extension is unknown, it first sends a
         * message to the extension to find out the supported API version and then it sends
         * the register request.
         * @param {string=} appId
         * @param {Array<u2f.RegisterRequest>} registerRequests
         * @param {Array<u2f.RegisteredKey>} registeredKeys
         * @param {function((u2f.Error|u2f.RegisterResponse))} callback
         * @param {number=} opt_timeoutSeconds
         */
        u2f.register = function(appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds) {
          if (js_api_version === undefined) {
            // Send a message to get the extension to JS API version, then send the actual register request.
            u2f.getApiVersion(
                function (response) {
                  js_api_version = response['js_api_version'] === undefined ? 0: response['js_api_version'];
                  console.log("Extension JS API Version: ", js_api_version);
                  u2f.sendRegisterRequest(appId, registerRequests, registeredKeys,
                      callback, opt_timeoutSeconds);
                });
          } else {
            // We know the JS API version. Send the actual register request in the supported API version.
            u2f.sendRegisterRequest(appId, registerRequests, registeredKeys,
                callback, opt_timeoutSeconds);
          }
        };

        /**
         * Dispatches register requests to available U2F tokens. An array of sign
         * requests identifies already registered tokens.
         * @param {string=} appId
         * @param {Array<u2f.RegisterRequest>} registerRequests
         * @param {Array<u2f.RegisteredKey>} registeredKeys
         * @param {function((u2f.Error|u2f.RegisterResponse))} callback
         * @param {number=} opt_timeoutSeconds
         */
        u2f.sendRegisterRequest = function(appId, registerRequests, registeredKeys, callback, opt_timeoutSeconds) {
          u2f.getPortSingleton_(function(port) {
            var reqId = ++u2f.reqCounter_;
            u2f.callbackMap_[reqId] = callback;
            var timeoutSeconds = (typeof opt_timeoutSeconds !== 'undefined' ?
                opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC);
            var req = u2f.formatRegisterRequest_(
                appId, registeredKeys, registerRequests, timeoutSeconds, reqId);
            port.postMessage(req);
          });
        };


        /**
         * Dispatches a message to the extension to find out the supported
         * JS API version.
         * If the user is on a mobile phone and is thus using Google Authenticator instead
         * of the Chrome extension, don't send the request and simply return 0.
         * @param {function((u2f.Error|u2f.GetJsApiVersionResponse))} callback
         * @param {number=} opt_timeoutSeconds
         */
        u2f.getApiVersion = function(callback, opt_timeoutSeconds) {
         u2f.getPortSingleton_(function(port) {
           // If we are using Android Google Authenticator or iOS client app,
           // do not fire an intent to ask which JS API version to use.
           if (port.getPortType) {
             var apiVersion;
             switch (port.getPortType()) {
               case 'WrappedIosPort_':
               case 'WrappedAuthenticatorPort_':
                 apiVersion = 1.1;
                 break;

               default:
                 apiVersion = 0;
                 break;
             }
             callback({ 'js_api_version': apiVersion });
             return;
           }
            var reqId = ++u2f.reqCounter_;
            u2f.callbackMap_[reqId] = callback;
            var req = {
              type: u2f.MessageTypes.U2F_GET_API_VERSION_REQUEST,
              timeoutSeconds: (typeof opt_timeoutSeconds !== 'undefined' ?
                  opt_timeoutSeconds : u2f.EXTENSION_TIMEOUT_SEC),
              requestId: reqId
            };
            port.postMessage(req);
          });
        };





        // Copyright 2014 Google Inc. All rights reserved
        //
        // Use of this source code is governed by a BSD-style
        // license that can be found in the LICENSE file or at
        // https://developers.google.com/open-source/licenses/bsd

        // WebSafeBase64Escape and Unescape.
        function B64_encode(bytes, opt_length) {
          if (!opt_length) opt_length = bytes.length;
          var b64out =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
          var result = '';
          var shift = 0;
          var accu = 0;
          var inputIndex = 0;
          while (opt_length--) {
            accu <<= 8;
            accu |= bytes[inputIndex++];
            shift += 8;
            while (shift >= 6) {
              let i = (accu >> (shift - 6)) & 63;
              result += b64out.charAt(i);
              shift -= 6;
            }
          }
          if (shift) {
            accu <<= 8;
            shift += 8;
            let i = (accu >> (shift - 6)) & 63;
            result += b64out.charAt(i);
          }
          return result;
        }

        // Normal base64 encode; not websafe, including padding.
        // function base64_encode(bytes, opt_length) {
        //   if (!opt_length) opt_length = bytes.length;
        //   var b64out =
        //       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        //   var result = '';
        //   var shift = 0;
        //   var accu = 0;
        //   var inputIndex = 0;
        //   while (opt_length--) {
        //     accu <<= 8;
        //     accu |= bytes[inputIndex++];
        //     shift += 8;
        //     while (shift >= 6) {
        //       let i = (accu >> (shift - 6)) & 63;
        //       result += b64out.charAt(i);
        //       shift -= 6;
        //     }
        //   }
        //   if (shift) {
        //     accu <<= 8;
        //     shift += 8;
        //     let i = (accu >> (shift - 6)) & 63;
        //     result += b64out.charAt(i);
        //   }
        //   while (result.length % 4) result += '=';
        //   return result;
        // }

        var B64_inmap =
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 63, 0, 0,
         53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 0, 0, 0, 0, 0, 0,
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
         16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 0, 0, 0, 0, 64,
          0, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
         42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 0, 0, 0, 0, 0
        ];

        function B64_decode(string) {
          var bytes = [];
          var accu = 0;
          var shift = 0;
          for (let i = 0; i < string.length; ++i) {
            var c = string.charCodeAt(i);
            if (c < 32 || c > 127 || !B64_inmap[c - 32]) return [];
            accu <<= 6;
            accu |= (B64_inmap[c - 32] - 1);
            shift += 6;
            if (shift >= 8) {
              bytes.push((accu >> (shift - 8)) & 255);
              shift -= 8;
            }
          }
          return bytes;
        }



        (function () {
          // https://github.com/ashtuchkin/u2f/blob/05c8bc6cc6d1610fd5bf0d9b9324615897dd6d0d/index.js#L62-L77
          function asnLen(buf) {
            if (buf.length < 2 || buf[0] != 0x30)
              throw new Error("Invalid data: Not a SEQUENCE ASN/DER structure");

            var len = buf[1];
            if (len & 0x80) { // long form
              var bytesCnt = len & 0x7F;
              if (buf.length < 2+bytesCnt)
                throw new Error("Invalid data: ASN structure not fully represented");
              len = 0;
              for (let i = 0; i < bytesCnt; i++)
                len = len*0x100 + buf[2+i];
              len += bytesCnt; // add bytes for length itself.
            }
            return len + 2; // add 2 initial bytes: type and length.
          }

          // Input fields
          var reqAppId = document.getElementById("reqAppId"); // read only
          var reqKeyHandle = document.getElementById("reqKeyHandle");

          // Output fields
          var response = document.getElementById("response");
          var resKeyHandle = document.getElementById("resKeyHandle");
          var resPublicKey = document.getElementById("resPublicKey");
          var resCertificate = document.getElementById("resCertificate");

          // Buttons
          var btnGenReq = document.getElementById("btnGenReq");
          var btnSign = document.getElementById("btnSign");
          var btnRegister = document.getElementById("btnRegister");

          if (location.protocol != "https:") {
            console.error("U2F requires the use of https.");
          } else {
            reqAppId.value = location.origin;
          }

          // Sign
          btnSign.addEventListener("click", function (e) {
              console.log('E', e);
            try {
              var value = JSON.parse(request.value);
              u2f.sign(value.appId, value.challenge, [{
                version: "U2F_V2",
                appId: value.appId,
                keyHandle: resKeyHandle.value
                // keyHandle: value.keyHandle
              }], function (res) {
                response.value = JSON.stringify(res);
              });
            } catch (e) {
              console.error("No request specified, generate or input one manually");
            }
          });

          // Register
          btnRegister.addEventListener("click", function (e) {
              console.log('E', e);
            try {
              var value = JSON.parse(request.value);
              u2f.register(value.appId, [{
                version: "U2F_V2",
                appId: value.appId,
                challenge: value.challenge
              }], [], function (res) {
                response.value = JSON.stringify(res);
                // https://github.com/ashtuchkin/u2f/blob/05c8bc6cc6d1610fd5bf0d9b9324615897dd6d0d/index.js#L128-L139
                var buf = B64_decode(res.registrationData);
                // var reserved = buf[0];                       buf = buf.slice(1);
                buf = buf.slice(1);
                var publicKey = buf.slice(0, 65);            buf = buf.slice(65);
                var keyHandleLen = buf[0];                   buf = buf.slice(1);
                var keyHandle = buf.slice(0, keyHandleLen);  buf = buf.slice(keyHandleLen);
                var certLen = asnLen(buf);
                var certificate = buf.slice(0, certLen);     buf = buf.slice(certLen);
                var signLen = asnLen(buf);
                // var signature = buf.slice(0, signLen);       buf = buf.slice(signLen);
                buf = buf.slice(signLen);
                if (buf.length !== 0) {
                  console.warn("U2F Registration Warning: registrationData has %s extra bytes: ", buf.length, buf);
                }

                resKeyHandle.value = B64_encode(keyHandle);
                resPublicKey.value = B64_encode(publicKey);
                resCertificate.value = B64_encode(certificate);
              });
            } catch (e) {
              console.error("No request specified, generate or input one manually");
            }
          });

          document.querySelectorAll("[readonly]:not([disabled])").forEach(function (el) {
            el.addEventListener("mouseup", function (e) {
              e.preventDefault();
            });
            el.addEventListener("focus", function (e) {
                console.log('E', e);
              this.select();
            });
          });
        })();






    },
    mounted: function () {
        //
    },
}
</script>
