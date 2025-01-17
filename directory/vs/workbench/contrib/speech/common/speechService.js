import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/platform.js';
define(de[511], he([1, 0, 4, 8, 5, 12]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$17 =
					e.$Z7 =
					e.AccessibilityVoiceSettingId =
					e.KeywordRecognitionStatus =
					e.TextToSpeechStatus =
					e.SpeechToTextStatus =
					e.$Y7 =
					e.$X7 =
					e.$W7 =
					e.$V7 =
						void 0),
				(e.$27 = u),
				(e.$V7 = (0, w.$Mi)("speechService")),
				(e.$W7 = new i.$5j("hasSpeechProvider", !1, {
					type: "boolean",
					description: (0, t.localize)(9491, null),
				})),
				(e.$X7 = new i.$5j("speechToTextInProgress", !1, {
					type: "boolean",
					description: (0, t.localize)(9492, null),
				})),
				(e.$Y7 = new i.$5j("textToSpeechInProgress", !1, {
					type: "boolean",
					description: (0, t.localize)(9493, null),
				}));
			var C;
			(function (a) {
				(a[(a.Started = 1)] = "Started"),
					(a[(a.Recognizing = 2)] = "Recognizing"),
					(a[(a.Recognized = 3)] = "Recognized"),
					(a[(a.Stopped = 4)] = "Stopped"),
					(a[(a.Error = 5)] = "Error");
			})(C || (e.SpeechToTextStatus = C = {}));
			var d;
			(function (a) {
				(a[(a.Started = 1)] = "Started"),
					(a[(a.Stopped = 2)] = "Stopped"),
					(a[(a.Error = 3)] = "Error");
			})(d || (e.TextToSpeechStatus = d = {}));
			var m;
			(function (a) {
				(a[(a.Recognized = 1)] = "Recognized"),
					(a[(a.Stopped = 2)] = "Stopped"),
					(a[(a.Canceled = 3)] = "Canceled");
			})(m || (e.KeywordRecognitionStatus = m = {}));
			var r;
			(function (a) {
				(a.SpeechTimeout = "accessibility.voice.speechTimeout"),
					(a.AutoSynthesize = "accessibility.voice.autoSynthesize"),
					(a.SpeechLanguage = "accessibility.voice.speechLanguage");
			})(r || (e.AccessibilityVoiceSettingId = r = {})),
				(e.$Z7 = r.SpeechLanguage),
				(e.$17 = {
					"da-DK": { name: (0, t.localize)(9494, null) },
					"de-DE": { name: (0, t.localize)(9495, null) },
					"en-AU": { name: (0, t.localize)(9496, null) },
					"en-CA": { name: (0, t.localize)(9497, null) },
					"en-GB": { name: (0, t.localize)(9498, null) },
					"en-IE": { name: (0, t.localize)(9499, null) },
					"en-IN": { name: (0, t.localize)(9500, null) },
					"en-NZ": { name: (0, t.localize)(9501, null) },
					"en-US": { name: (0, t.localize)(9502, null) },
					"es-ES": { name: (0, t.localize)(9503, null) },
					"es-MX": { name: (0, t.localize)(9504, null) },
					"fr-CA": { name: (0, t.localize)(9505, null) },
					"fr-FR": { name: (0, t.localize)(9506, null) },
					"hi-IN": { name: (0, t.localize)(9507, null) },
					"it-IT": { name: (0, t.localize)(9508, null) },
					"ja-JP": { name: (0, t.localize)(9509, null) },
					"ko-KR": { name: (0, t.localize)(9510, null) },
					"nl-NL": { name: (0, t.localize)(9511, null) },
					"pt-PT": { name: (0, t.localize)(9512, null) },
					"pt-BR": { name: (0, t.localize)(9513, null) },
					"ru-RU": { name: (0, t.localize)(9514, null) },
					"sv-SE": { name: (0, t.localize)(9515, null) },
					"tr-TR": { name: (0, t.localize)(9516, null) },
					"zh-CN": { name: (0, t.localize)(9517, null) },
					"zh-HK": { name: (0, t.localize)(9518, null) },
					"zh-TW": { name: (0, t.localize)(9519, null) },
				});
			function u(a, h = E.$z) {
				if (typeof a == "string") {
					if (a === "auto") {
						if (h !== "en") {
							const c = h.split("-");
							return u(`${c[0]}-${(c[1] ?? c[0]).toUpperCase()}`);
						}
					} else if (e.$17[a]) return a;
				}
				return "en-US";
			}
		}),
		