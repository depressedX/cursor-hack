import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/labels.js';
import '../../../../base/common/path.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/strings.js';
import '../../../../base/common/uuid.js';
import '../../../common/languages/languageConfigurationRegistry.js';
import './snippetParser.js';
import '../../../../nls.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[1672],
			he([1, 0, 222, 54, 19, 37, 47, 152, 389, 4, 25]),
			function (ce /*require*/,
 e /*exports*/,
 t /*labels*/,
 i /*path*/,
 w /*resources*/,
 E /*strings*/,
 C /*uuid*/,
 d /*languageConfigurationRegistry*/,
 m /*snippetParser*/,
 r /*nls*/,
 u /*workspace*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$mDb =
						e.$lDb =
						e.$kDb =
						e.$jDb =
						e.$iDb =
						e.$hDb =
						e.$gDb =
						e.$fDb =
						e.$eDb =
							void 0),
					(i = mt(i)),
					(r = mt(r)),
					(e.$eDb = Object.freeze({
						CURRENT_YEAR: !0,
						CURRENT_YEAR_SHORT: !0,
						CURRENT_MONTH: !0,
						CURRENT_DATE: !0,
						CURRENT_HOUR: !0,
						CURRENT_MINUTE: !0,
						CURRENT_SECOND: !0,
						CURRENT_DAY_NAME: !0,
						CURRENT_DAY_NAME_SHORT: !0,
						CURRENT_MONTH_NAME: !0,
						CURRENT_MONTH_NAME_SHORT: !0,
						CURRENT_SECONDS_UNIX: !0,
						CURRENT_TIMEZONE_OFFSET: !0,
						SELECTION: !0,
						CLIPBOARD: !0,
						TM_SELECTED_TEXT: !0,
						TM_CURRENT_LINE: !0,
						TM_CURRENT_WORD: !0,
						TM_LINE_INDEX: !0,
						TM_LINE_NUMBER: !0,
						TM_FILENAME: !0,
						TM_FILENAME_BASE: !0,
						TM_DIRECTORY: !0,
						TM_FILEPATH: !0,
						CURSOR_INDEX: !0,
						CURSOR_NUMBER: !0,
						RELATIVE_FILEPATH: !0,
						BLOCK_COMMENT_START: !0,
						BLOCK_COMMENT_END: !0,
						LINE_COMMENT: !0,
						WORKSPACE_NAME: !0,
						WORKSPACE_FOLDER: !0,
						RANDOM: !0,
						RANDOM_HEX: !0,
						UUID: !0,
					}));
				class a {
					constructor(s) {
						this.a = s;
					}
					resolve(s) {
						for (const l of this.a) {
							const y = l.resolve(s);
							if (y !== void 0) return y;
						}
					}
				}
				e.$fDb = a;
				class h {
					constructor(s, l, y, $) {
						(this.a = s), (this.b = l), (this.c = y), (this.d = $);
					}
					resolve(s) {
						const { name: l } = s;
						if (l === "SELECTION" || l === "TM_SELECTED_TEXT") {
							let y = this.a.getValueInRange(this.b) || void 0,
								$ = this.b.startLineNumber !== this.b.endLineNumber;
							if (!y && this.d) {
								const v = this.d.getLastOvertypedInfo(this.c);
								v && ((y = v.value), ($ = v.multiline));
							}
							if (y && $ && s.snippet) {
								const v = this.a.getLineContent(this.b.startLineNumber),
									S = (0, E.$Cf)(v, 0, this.b.startColumn - 1);
								let I = S;
								s.snippet.walk((P) =>
									P === s
										? !1
										: (P instanceof m.Text &&
												(I = (0, E.$Cf)((0, E.$zf)(P.value).pop())),
											!0),
								);
								const T = (0, E.$Of)(I, S);
								y = y.replace(
									/(\r\n|\r|\n)(.*)/g,
									(P, k, L) => `${k}${I.substr(T)}${L}`,
								);
							}
							return y;
						} else {
							if (l === "TM_CURRENT_LINE")
								return this.a.getLineContent(this.b.positionLineNumber);
							if (l === "TM_CURRENT_WORD") {
								const y = this.a.getWordAtPosition({
									lineNumber: this.b.positionLineNumber,
									column: this.b.positionColumn,
								});
								return (y && y.word) || void 0;
							} else {
								if (l === "TM_LINE_INDEX")
									return String(this.b.positionLineNumber - 1);
								if (l === "TM_LINE_NUMBER")
									return String(this.b.positionLineNumber);
								if (l === "CURSOR_INDEX") return String(this.c);
								if (l === "CURSOR_NUMBER") return String(this.c + 1);
							}
						}
					}
				}
				e.$gDb = h;
				class c {
					constructor(s, l) {
						(this.a = s), (this.b = l);
					}
					resolve(s) {
						const { name: l } = s;
						if (l === "TM_FILENAME") return i.$sc(this.b.uri.fsPath);
						if (l === "TM_FILENAME_BASE") {
							const y = i.$sc(this.b.uri.fsPath),
								$ = y.lastIndexOf(".");
							return $ <= 0 ? y : y.slice(0, $);
						} else {
							if (l === "TM_DIRECTORY")
								return i.$rc(this.b.uri.fsPath) === "."
									? ""
									: this.a.getUriLabel((0, w.$mh)(this.b.uri));
							if (l === "TM_FILEPATH") return this.a.getUriLabel(this.b.uri);
							if (l === "RELATIVE_FILEPATH")
								return this.a.getUriLabel(this.b.uri, {
									relative: !0,
									noPrefix: !0,
								});
						}
					}
				}
				e.$hDb = c;
				class n {
					constructor(s, l, y, $) {
						(this.a = s), (this.b = l), (this.c = y), (this.d = $);
					}
					resolve(s) {
						if (s.name !== "CLIPBOARD") return;
						const l = this.a();
						if (l) {
							if (this.d) {
								const y = l.split(/\r\n|\n|\r/).filter(($) => !(0, E.$jf)($));
								if (y.length === this.c) return y[this.b];
							}
							return l;
						}
					}
				}
				e.$iDb = n;
				let g = class {
					constructor(s, l, y) {
						(this.a = s), (this.b = l), (this.c = y);
					}
					resolve(s) {
						const { name: l } = s,
							y = this.a.getLanguageIdAtPosition(
								this.b.selectionStartLineNumber,
								this.b.selectionStartColumn,
							),
							$ = this.c.getLanguageConfiguration(y).comments;
						if ($) {
							if (l === "LINE_COMMENT") return $.lineCommentToken || void 0;
							if (l === "BLOCK_COMMENT_START")
								return $.blockCommentStartToken || void 0;
							if (l === "BLOCK_COMMENT_END")
								return $.blockCommentEndToken || void 0;
						}
					}
				};
				(e.$jDb = g), (e.$jDb = g = Ne([j(2, d.$aN)], g));
				class p {
					constructor() {
						this.e = new Date();
					}
					static {
						this.a = [
							r.localize(1428, null),
							r.localize(1429, null),
							r.localize(1430, null),
							r.localize(1431, null),
							r.localize(1432, null),
							r.localize(1433, null),
							r.localize(1434, null),
						];
					}
					static {
						this.b = [
							r.localize(1435, null),
							r.localize(1436, null),
							r.localize(1437, null),
							r.localize(1438, null),
							r.localize(1439, null),
							r.localize(1440, null),
							r.localize(1441, null),
						];
					}
					static {
						this.c = [
							r.localize(1442, null),
							r.localize(1443, null),
							r.localize(1444, null),
							r.localize(1445, null),
							r.localize(1446, null),
							r.localize(1447, null),
							r.localize(1448, null),
							r.localize(1449, null),
							r.localize(1450, null),
							r.localize(1451, null),
							r.localize(1452, null),
							r.localize(1453, null),
						];
					}
					static {
						this.d = [
							r.localize(1454, null),
							r.localize(1455, null),
							r.localize(1456, null),
							r.localize(1457, null),
							r.localize(1458, null),
							r.localize(1459, null),
							r.localize(1460, null),
							r.localize(1461, null),
							r.localize(1462, null),
							r.localize(1463, null),
							r.localize(1464, null),
							r.localize(1465, null),
						];
					}
					resolve(s) {
						const { name: l } = s;
						if (l === "CURRENT_YEAR") return String(this.e.getFullYear());
						if (l === "CURRENT_YEAR_SHORT")
							return String(this.e.getFullYear()).slice(-2);
						if (l === "CURRENT_MONTH")
							return String(this.e.getMonth().valueOf() + 1).padStart(2, "0");
						if (l === "CURRENT_DATE")
							return String(this.e.getDate().valueOf()).padStart(2, "0");
						if (l === "CURRENT_HOUR")
							return String(this.e.getHours().valueOf()).padStart(2, "0");
						if (l === "CURRENT_MINUTE")
							return String(this.e.getMinutes().valueOf()).padStart(2, "0");
						if (l === "CURRENT_SECOND")
							return String(this.e.getSeconds().valueOf()).padStart(2, "0");
						if (l === "CURRENT_DAY_NAME") return p.a[this.e.getDay()];
						if (l === "CURRENT_DAY_NAME_SHORT") return p.b[this.e.getDay()];
						if (l === "CURRENT_MONTH_NAME") return p.c[this.e.getMonth()];
						if (l === "CURRENT_MONTH_NAME_SHORT") return p.d[this.e.getMonth()];
						if (l === "CURRENT_SECONDS_UNIX")
							return String(Math.floor(this.e.getTime() / 1e3));
						if (l === "CURRENT_TIMEZONE_OFFSET") {
							const y = this.e.getTimezoneOffset(),
								$ = y > 0 ? "-" : "+",
								v = Math.trunc(Math.abs(y / 60)),
								S = v < 10 ? "0" + v : v,
								I = Math.abs(y) - v * 60,
								T = I < 10 ? "0" + I : I;
							return $ + S + ":" + T;
						}
					}
				}
				e.$kDb = p;
				class o {
					constructor(s) {
						this.a = s;
					}
					resolve(s) {
						if (!this.a) return;
						const l = (0, u.$1i)(this.a.getWorkspace());
						if (!(0, u.$Xi)(l)) {
							if (s.name === "WORKSPACE_NAME") return this.b(l);
							if (s.name === "WORKSPACE_FOLDER") return this.c(l);
						}
					}
					b(s) {
						if ((0, u.$Wi)(s)) return i.$sc(s.uri.path);
						let l = i.$sc(s.configPath.path);
						return (
							l.endsWith(u.$9i) &&
								(l = l.substr(0, l.length - u.$9i.length - 1)),
							l
						);
					}
					c(s) {
						if ((0, u.$Wi)(s)) return (0, t.$xO)(s.uri.fsPath);
						const l = i.$sc(s.configPath.path);
						let y = s.configPath.fsPath;
						return (
							y.endsWith(l) && (y = y.substr(0, y.length - l.length - 1)),
							y ? (0, t.$xO)(y) : "/"
						);
					}
				}
				e.$lDb = o;
				class f {
					resolve(s) {
						const { name: l } = s;
						if (l === "RANDOM") return Math.random().toString().slice(-6);
						if (l === "RANDOM_HEX") return Math.random().toString(16).slice(-6);
						if (l === "UUID") return (0, C.$9g)();
					}
				}
				e.$mDb = f;
			},
		)
