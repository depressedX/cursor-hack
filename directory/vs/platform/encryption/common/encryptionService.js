import '../../../../require.js';
import '../../../../exports.js';
import '../../instantiation/common/instantiation.js';
define(de[1186], he([1, 0, 5]), function (ce /*require*/,
 e /*exports*/,
 t /*instantiation*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.KnownStorageProvider =
					e.PasswordStoreCLIOption =
					e.$Vrb =
					e.$Urb =
						void 0),
				(e.$Wrb = E),
				(e.$Xrb = C),
				(e.$Urb = (0, t.$Mi)("encryptionService")),
				(e.$Vrb = (0, t.$Mi)("encryptionMainService"));
			var i;
			(function (d) {
				(d.kwallet = "kwallet"),
					(d.kwallet5 = "kwallet5"),
					(d.gnomeLibsecret = "gnome-libsecret"),
					(d.basic = "basic");
			})(i || (e.PasswordStoreCLIOption = i = {}));
			var w;
			(function (d) {
				(d.unknown = "unknown"),
					(d.basicText = "basic_text"),
					(d.gnomeAny = "gnome_any"),
					(d.gnomeLibsecret = "gnome_libsecret"),
					(d.gnomeKeyring = "gnome_keyring"),
					(d.kwallet = "kwallet"),
					(d.kwallet5 = "kwallet5"),
					(d.kwallet6 = "kwallet6"),
					(d.dplib = "dpapi"),
					(d.keychainAccess = "keychain_access");
			})(w || (e.KnownStorageProvider = w = {}));
			function E(d) {
				return d === w.kwallet || d === w.kwallet5 || d === w.kwallet6;
			}
			function C(d) {
				return (
					d === w.gnomeAny || d === w.gnomeLibsecret || d === w.gnomeKeyring
				);
			}
		}),
		