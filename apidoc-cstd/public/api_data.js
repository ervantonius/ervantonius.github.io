define({ "api": [
  {
    "type": "get",
    "url": "/v1/quick_reply_media/:organizationID/:filename",
    "title": "Quick Reply Media",
    "version": "1.41.0",
    "name": "QuickReplyMedia",
    "group": "PublicAPI",
    "description": "<p>Download a quick reply media.</p> <blockquote> <p><strong>IMPORTANT!</strong></p> <p>This API returns response based on the downloaded media's content type.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The media's token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "token=abc",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileNotFound",
            "description": "<p>The selected filepath or its saved file is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>The user has no permission to the selected file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FileNotFound:",
          "content": "HTTP/1.1 404 Not Found\nfile is not found",
          "type": "json"
        }
      ]
    },
    "filename": "internal/app/cstd/public/v1/endpoint/quick-reply-media.go",
    "groupTitle": "Public API"
  },
  {
    "type": "get",
    "url": "/v1/request_info",
    "title": "Request Info",
    "version": "1.41.0",
    "name": "RequestInfo",
    "group": "PublicAPI",
    "description": "<p>Show request info.</p>",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\nRemoteAddr: [::1]:51181\nClient IP Address: ::1\nUser-Agent: \"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.146 Safari/537.36\"\nSec-Fetch-Site: \"none\"\nAccept-Encoding: \"gzip, deflate, br\"\nAccept-Language: \"en-US,en;q=0.9\"\nConnection: \"keep-alive\"\nUpgrade-Insecure-Requests: \"1\"\nDnt: \"1\"\nAccept: \"text/html,application/xhtml+xml\"\nSec-Fetch-Mode: \"navigate\"\nSec-Fetch-User: \"?1\"\nSec-Fetch-Dest: \"document\"\nCache-Control: \"max-age=0\"",
          "type": "text"
        }
      ]
    },
    "filename": "internal/app/cstd/public/v1/endpoint/request-info.go",
    "groupTitle": "Public API"
  },
  {
    "type": "get",
    "url": "/v1/waba_template_media/:organizationID/:filename",
    "title": "WABA Template Media",
    "version": "1.41.0",
    "name": "WABATemplateMedia",
    "group": "PublicAPI",
    "description": "<p>Download a WABA template media.</p> <blockquote> <p><strong>IMPORTANT!</strong></p> <p>This API returns response based on the downloaded media's content type.</p> </blockquote>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>The media's token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "token=abc",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FileNotFound",
            "description": "<p>The selected filepath or its saved file is not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>The user has no permission to the selected file.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "FileNotFound:",
          "content": "HTTP/1.1 404 Not Found\nfile is not found",
          "type": "json"
        }
      ]
    },
    "filename": "internal/app/cstd/public/v1/endpoint/whatsappba-template-media.go",
    "groupTitle": "Public API"
  },
  {
    "type": "get",
    "url": "/v1/whatsapp_embedded_signup/apps",
    "title": "WhatsApp Embedded Signup - Apps",
    "version": "1.47.0",
    "name": "WhatsAppEmbeddedSignup_Apps",
    "group": "PublicAPI",
    "description": "<p>Get the FB apps for WhatApp Embedded Signup.</p>",
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"fbApps\": [\n    {\n      \"appID\": \"339154784992xxx\",\n      \"appName\": \"OneTalk by TapTalk.io\",\n      \"graphAPIVersion\": \"v18.0\",\n      \"configID\": \"1468079883756xxx\",\n      \"partnerSolutions\": [\n        {\n          \"id\": \"-\",\n          \"name\": \"None (Direct)\"\n        },\n        {\n          \"id\": \"2421177xxxxxxxx\",\n          \"name\": \"Meta\"\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "internal/app/cstd/public/v1/endpoint/whatsapp-embedded-signup-apps.go",
    "groupTitle": "Public API"
  },
  {
    "type": "get",
    "url": "/v1/whatsapp_embedded_signup/exchange_code",
    "title": "WhatsApp Embedded Signup - Exchange Code",
    "version": "1.47.0",
    "name": "WhatsAppEmbeddedSignup_ExchangeCode",
    "group": "PublicAPI",
    "description": "<p>Exchange code from Embedded Signup response with access token. The returned response can be used to create WABA channel.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "fbAppID",
            "description": "<p>The FB App ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "partnerSolutionID",
            "description": "<p>The partner solution ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>The code from Embedded Signup response.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"fbAppID\": \"339154784992xxx\",\n  \"partnerSolutionID\": \"2421177xxxxxxxx\",\n  \"code\": \"AQAl1x6dovybiLPXt_wuI9L5K-nFiFKIii_Wsqxh0T-pn7V45MHnoUEAzmLKbRiC...\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"isEmbeddedSignup\": true,\n  \"embeddedSignup\": {\n    \"fbAppID\": {{FB_APP_ID}},\n    \"partnerSolutionID\": {{PARTNER_SOLUTION_ID}},\n    \"pin\": \"\"\n  },\n  \"wabaID\": \"{{WABA_ID}}\",\n  \"dataLocalizationRegion\": \"\",\n  \"accessToken\": \"{{ACCESS_TOKEN}}\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "internal/app/cstd/public/v1/endpoint/whatsapp-embedded-signup-exchange-code.go",
    "groupTitle": "Public API"
  }
] });
