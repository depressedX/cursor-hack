import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import '../../../../base/common/dataTransfer.js';
import '../../../../base/common/hierarchicalKind.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/mime.js';
import '../../../../base/common/network.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/uri.js';
import '../../../common/languages.js';
import '../../../common/services/languageFeatures.js';
import '../../../../nls.js';
import '../../../../platform/workspace/common/workspace.js';
define(
			de[1213],
			he([1, 0, 24, 489, 318, 3, 266, 23, 19, 9, 74, 69, 4, 25]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$xzb = e.$wzb = e.$vzb = void 0);
				class n {
					async provideDocumentPasteEdits($, v, S, I, T) {
						const P = await this.a(S, T);
						if (P)
							return {
								edits: [
									{
										insertText: P.insertText,
										title: P.title,
										kind: P.kind,
										handledMimeType: P.handledMimeType,
										yieldTo: P.yieldTo,
									},
								],
								dispose() {},
							};
					}
					async provideDocumentDropEdits($, v, S, I) {
						const T = await this.a(S, I);
						if (T)
							return {
								edits: [
									{
										insertText: T.insertText,
										title: T.title,
										kind: T.kind,
										handledMimeType: T.handledMimeType,
										yieldTo: T.yieldTo,
									},
								],
								dispose() {},
							};
					}
				}
				class g extends n {
					constructor() {
						super(...arguments),
							(this.id = g.id),
							(this.kind = g.kind),
							(this.dropMimeTypes = [C.$EK.text]),
							(this.pasteMimeTypes = [C.$EK.text]);
					}
					static {
						this.id = "text";
					}
					static {
						this.kind = new w.$1L("text.plain");
					}
					async a($, v) {
						const S = $.get(C.$EK.text);
						if (!S || $.has(C.$EK.uriList)) return;
						const I = await S.asString();
						return {
							handledMimeType: C.$EK.text,
							title: (0, h.localize)(989, null),
							insertText: I,
							kind: this.kind,
						};
					}
				}
				e.$vzb = g;
				class p extends n {
					constructor() {
						super(...arguments),
							(this.kind = new w.$1L("uri.absolute")),
							(this.dropMimeTypes = [C.$EK.uriList]),
							(this.pasteMimeTypes = [C.$EK.uriList]);
					}
					async a($, v) {
						const S = await b($);
						if (!S.length || v.isCancellationRequested) return;
						let I = 0;
						const T = S.map(({ uri: k, originalText: L }) =>
							k.scheme === d.Schemas.file ? k.fsPath : (I++, L),
						).join(" ");
						let P;
						return (
							I > 0
								? (P =
										S.length > 1
											? (0, h.localize)(990, null)
											: (0, h.localize)(991, null))
								: (P =
										S.length > 1
											? (0, h.localize)(992, null)
											: (0, h.localize)(993, null)),
							{
								handledMimeType: C.$EK.uriList,
								insertText: T,
								title: P,
								kind: this.kind,
							}
						);
					}
				}
				let o = class extends n {
					constructor($) {
						super(),
							(this.b = $),
							(this.kind = new w.$1L("uri.relative")),
							(this.dropMimeTypes = [C.$EK.uriList]),
							(this.pasteMimeTypes = [C.$EK.uriList]);
					}
					async a($, v) {
						const S = await b($);
						if (!S.length || v.isCancellationRequested) return;
						const I = (0, t.$Lb)(
							S.map(({ uri: T }) => {
								const P = this.b.getWorkspaceFolder(T);
								return P ? (0, m.$ph)(P.uri, T) : void 0;
							}),
						);
						if (I.length)
							return {
								handledMimeType: C.$EK.uriList,
								insertText: I.join(" "),
								title:
									S.length > 1
										? (0, h.localize)(994, null)
										: (0, h.localize)(995, null),
								kind: this.kind,
							};
					}
				};
				o = Ne([j(0, c.$Vi)], o);
				class f {
					constructor() {
						(this.kind = new w.$1L("html")),
							(this.pasteMimeTypes = ["text/html"]),
							(this.a = [{ mimeType: C.$EK.text }]);
					}
					async provideDocumentPasteEdits($, v, S, I, T) {
						if (
							I.triggerKind !== u.DocumentPasteTriggerKind.PasteAs &&
							!I.only?.contains(this.kind)
						)
							return;
						const k = await S.get("text/html")?.asString();
						if (!(!k || T.isCancellationRequested))
							return {
								dispose() {},
								edits: [
									{
										insertText: k,
										yieldTo: this.a,
										title: (0, h.localize)(996, null),
										kind: this.kind,
									},
								],
							};
					}
				}
				async function b(y) {
					const $ = y.get(C.$EK.uriList);
					if (!$) return [];
					const v = await $.asString(),
						S = [];
					for (const I of i.$ZL.parse(v))
						try {
							S.push({ uri: r.URI.parse(I), originalText: I });
						} catch {}
					return S;
				}
				let s = class extends E.$1c {
					constructor($, v) {
						super(),
							this.D($.documentDropEditProvider.register("*", new g())),
							this.D($.documentDropEditProvider.register("*", new p())),
							this.D($.documentDropEditProvider.register("*", new o(v)));
					}
				};
				(e.$wzb = s), (e.$wzb = s = Ne([j(0, a.$k3), j(1, c.$Vi)], s));
				let l = class extends E.$1c {
					constructor($, v) {
						super(),
							this.D($.documentPasteEditProvider.register("*", new g())),
							this.D($.documentPasteEditProvider.register("*", new p())),
							this.D($.documentPasteEditProvider.register("*", new o(v))),
							this.D($.documentPasteEditProvider.register("*", new f()));
					}
				};
				(e.$xzb = l), (e.$xzb = l = Ne([j(0, a.$k3), j(1, c.$Vi)], l));
			},
		),
		