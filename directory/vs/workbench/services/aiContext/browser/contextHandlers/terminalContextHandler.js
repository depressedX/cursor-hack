import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../../proto/aiserver/v1/context_pb.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import '../../../ai/browser/simpleChunkingService.js';
import '../../../../../base/common/result.js';
import '../simpleSerialProcessor.js';
import '../../../../../base/common/uri.js';
import '../../../../contrib/terminal/browser/terminal.js';
import '../../../ai/browser/fastContextService.js';
define(
			de[1876],
			he([1, 0, 228, 3, 42, 25, 1038, 529, 1012, 9, 107, 400]),
			function (ce /*require*/,
 e /*exports*/,
 t /*context_pb*/,
 i /*lifecycle*/,
 w /*resolverService*/,
 E /*workspace*/,
 C /*simpleChunkingService*/,
 d /*result*/,
 m /*simpleSerialProcessor*/,
 r /*uri*/,
 u /*terminal*/,
 a /*fastContextService*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$PZc = void 0);
				let h = class {
					constructor(n, g, p, o, f, b) {
						(this.a = n),
							(this.b = g),
							(this.c = p),
							(this.d = o),
							(this.f = f),
							(this.g = b),
							(this.h = new AbortController()),
							(this.j = this.i()),
							(this.k = void 0),
							(this.l = new i.$Zc()),
							(this.m = void 0),
							(this.n = void 0),
							(this.p = 0);
					}
					i() {
						return new m.$Dcc(
							(n) => this.o(n),
							this.h.signal,
							(n, g) =>
								n.instanceId !== g.instanceId ||
								n.updateCounter !== g.updateCounter,
							(n) => {
								this.a.error({ message: "Error processing terminal context." });
							},
						);
					}
					async o(n) {
						if (n.aborted) return (0, d.Err)("retryableFailure");
						const g = this.m,
							p = this.k;
						if (g === void 0 || p === void 0 || p.isDisposed)
							throw new Error(
								"Bad (but not totally unexpected until we have a nonhacky version in place here): instance seems to be disposed!",
							);
						let o = [],
							f = "";
						const b = p.xterm;
						if (b) {
							const $ = g.intent.value.activeForCmdK
								? b.getBufferReverseIteratorFromCursor()
								: b.getBufferReverseIterator();
							for (const v of $)
								if (
									((f =
										v +
										`
` +
										f),
									f.length > 1e4)
								)
									break;
						}
						const s = await p.getCwd(),
							l = r.URI.file(s);
						return (
							(o = [
								{
									intent: this.m,
									item: {
										case: "terminalHistory",
										value: {
											history: f,
											cwdFull: s,
											cwdRelativeWorkspacePath: this.b.asRelativePath(l),
											activeForCmdK: g.intent.value.activeForCmdK ?? !1,
											timestampDouble: this.g.getTimeOfLastTerminalCommand(),
										},
									},
								},
							]),
							(await this.a.newItems(o)).ok()
								? (0, d.Ok)("success")
								: (0, d.Err)("retryableFailure")
						);
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(n, g) {
						(this.m = g),
							(this.n = n),
							this.process({ runEvenIfAlreadyProcessing: !1 });
					}
					async process(n) {
						this.h.signal.aborted ||
							this.m === void 0 ||
							this.n === void 0 ||
							((this.m.intent.value.instanceId !== this.k?.instanceId ||
								(this.k === void 0 &&
									this.m.intent.value.useActiveInstanceAsFallback)) &&
								(this.m.intent.value.instanceId === void 0 &&
								this.m.intent.value.useActiveInstanceAsFallback
									? (this.k = this.f.getActiveInstance())
									: (this.k = this.f.getInstanceFromId(
											this.m.intent.value.instanceId,
										))),
							n.runEvenIfAlreadyProcessing && this.p++,
							await this.j.process({
								runEvenIfAlreadyProcessing: n.runEvenIfAlreadyProcessing,
								state: {
									instanceId: this.m.intent.value.instanceId,
									updateCounter: this.p,
								},
							}));
					}
					async blockForFinalInput(n, g) {
						return (
							(this.m = g),
							(this.n = n),
							g.type === t.ContextIntent_Type.AUTOMATIC &&
							g.intent.value.activeForCmdK !== !0
								? "fallBackToCachedReranked"
								: (await this.process({ runEvenIfAlreadyProcessing: !0 }),
									"useFreshItemsEvenIfNotRerankedYet")
						);
					}
					freeze() {
						this.h.abort();
					}
					unfreeze() {
						(this.h = new AbortController()), (this.j = this.i());
					}
					dispose() {
						this.h.abort(), this.l.dispose();
					}
				};
				(e.$PZc = h),
					(e.$PZc = h =
						Ne(
							[
								j(1, E.$Vi),
								j(2, w.$MO),
								j(3, C.$L8b),
								j(4, u.$iIb),
								j(5, a.$26b),
							],
							h,
						));
			},
		)
