import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/glob.js';
import '../../../base/common/mime.js';
import '../../../base/common/network.js';
import '../../../base/common/path.js';
import '../../../base/common/resources.js';
import '../../../base/common/strings.js';
import '../languages/modesRegistry.js';
define(
			de[671],
			he([1, 0, 215, 266, 23, 54, 19, 37, 172]),
			function (ce /*require*/,
 e /*exports*/,
 t /*glob*/,
 i /*mime*/,
 w /*network*/,
 E /*path*/,
 C /*resources*/,
 d /*strings*/,
 m /*modesRegistry*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hYb = h),
					(e.$iYb = c),
					(e.$jYb = p),
					(e.$kYb = o),
					(e.$lYb = f),
					(e.$mYb = b);
				let r = [],
					u = [],
					a = [];
				function h($, v = !1) {
					n($, !1, v);
				}
				function c($) {
					n($, !0, !1);
				}
				function n($, v, S) {
					const I = g($, v);
					r.push(I),
						I.userConfigured ? a.push(I) : u.push(I),
						S &&
							!I.userConfigured &&
							r.forEach((T) => {
								T.mime === I.mime ||
									T.userConfigured ||
									(I.extension &&
										T.extension === I.extension &&
										console.warn(
											`Overwriting extension <<${I.extension}>> to now point to mime <<${I.mime}>>`,
										),
									I.filename &&
										T.filename === I.filename &&
										console.warn(
											`Overwriting filename <<${I.filename}>> to now point to mime <<${I.mime}>>`,
										),
									I.filepattern &&
										T.filepattern === I.filepattern &&
										console.warn(
											`Overwriting filepattern <<${I.filepattern}>> to now point to mime <<${I.mime}>>`,
										),
									I.firstline &&
										T.firstline === I.firstline &&
										console.warn(
											`Overwriting firstline <<${I.firstline}>> to now point to mime <<${I.mime}>>`,
										));
							});
				}
				function g($, v) {
					return {
						id: $.id,
						mime: $.mime,
						filename: $.filename,
						extension: $.extension,
						filepattern: $.filepattern,
						firstline: $.firstline,
						userConfigured: v,
						filenameLowercase: $.filename ? $.filename.toLowerCase() : void 0,
						extensionLowercase: $.extension
							? $.extension.toLowerCase()
							: void 0,
						filepatternLowercase: $.filepattern
							? (0, t.$Jk)($.filepattern.toLowerCase())
							: void 0,
						filepatternOnPath: $.filepattern
							? $.filepattern.indexOf(E.$lc.sep) >= 0
							: !1,
					};
				}
				function p() {
					(r = r.filter(($) => $.userConfigured)), (u = []);
				}
				function o() {
					(r = r.filter(($) => !$.userConfigured)), (a = []);
				}
				function f($, v) {
					return s($, v).map((S) => S.mime);
				}
				function b($, v) {
					return s($, v).map((S) => S.id);
				}
				function s($, v) {
					let S;
					if ($)
						switch ($.scheme) {
							case w.Schemas.file:
								S = $.fsPath;
								break;
							case w.Schemas.data: {
								S = C.DataUri.parseMetaData($).get(C.DataUri.META_DATA_LABEL);
								break;
							}
							case w.Schemas.vscodeNotebookCell:
								S = void 0;
								break;
							default:
								S = $.path;
						}
					if (!S) return [{ id: "unknown", mime: i.$EK.unknown }];
					S = S.toLowerCase();
					const I = (0, E.$sc)(S),
						T = l(S, I, a);
					if (T) return [T, { id: m.$0M, mime: i.$EK.text }];
					const P = l(S, I, u);
					if (P) return [P, { id: m.$0M, mime: i.$EK.text }];
					if (v) {
						const k = y(v);
						if (k) return [k, { id: m.$0M, mime: i.$EK.text }];
					}
					return [{ id: "unknown", mime: i.$EK.unknown }];
				}
				function l($, v, S) {
					let I, T, P;
					for (let k = S.length - 1; k >= 0; k--) {
						const L = S[k];
						if (v === L.filenameLowercase) {
							I = L;
							break;
						}
						if (
							L.filepattern &&
							(!T || L.filepattern.length > T.filepattern.length)
						) {
							const D = L.filepatternOnPath ? $ : v;
							L.filepatternLowercase?.(D) && (T = L);
						}
						L.extension &&
							(!P || L.extension.length > P.extension.length) &&
							v.endsWith(L.extensionLowercase) &&
							(P = L);
					}
					if (I) return I;
					if (T) return T;
					if (P) return P;
				}
				function y($) {
					if (((0, d.$_f)($) && ($ = $.substr(1)), $.length > 0))
						for (let v = r.length - 1; v >= 0; v--) {
							const S = r[v];
							if (!S.firstline) continue;
							const I = $.match(S.firstline);
							if (I && I.length > 0) return S;
						}
				}
			},
		),
		