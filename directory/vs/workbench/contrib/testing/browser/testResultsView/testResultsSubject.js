import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../base/common/marshallingIds.js';
import '../../../../../editor/common/core/range.js';
import '../../common/testId.js';
import '../../common/testTypes.js';
import '../../common/testingUri.js';
define(
			de[1002],
			he([1, 0, 221, 17, 259, 185, 813]),
			function (ce /*require*/,
 e /*exports*/,
 t /*marshallingIds*/,
 i /*range*/,
 w /*testId*/,
 E /*testTypes*/,
 C /*testingUri*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$jLc =
						e.$iLc =
						e.$hLc =
						e.$gLc =
						e.$fLc =
						e.$eLc =
						e.$dLc =
						e.$cLc =
							void 0);
				const d = (g, p) => ({
					$mid: t.MarshalledId.TestMessageMenuArgs,
					test: E.InternalTestItem.serialize(g),
					message: E.ITestMessage.serialize(p),
				});
				e.$cLc = d;
				const m = (g) => g instanceof r && !!g.stack?.length;
				e.$dLc = m;
				class r {
					get controllerId() {
						return w.$k4.root(this.test.extId);
					}
					get isDiffable() {
						return (
							this.message.type === E.TestMessageType.Error &&
							E.ITestMessage.isDiffable(this.message)
						);
					}
					get contextValue() {
						return this.message.type === E.TestMessageType.Error
							? this.message.contextValue
							: void 0;
					}
					get stack() {
						return this.message.type === E.TestMessageType.Error &&
							this.message.stackTrace?.length
							? this.message.stackTrace
							: void 0;
					}
					constructor(p, o, f, b) {
						(this.result = p),
							(this.taskIndex = f),
							(this.messageIndex = b),
							(this.test = o.item);
						const s = o.tasks[f].messages;
						this.messageIndex = b;
						const l = {
							messageIndex: b,
							resultId: p.id,
							taskIndex: f,
							testExtId: o.item.extId,
						};
						(this.expectedUri = (0, C.$3Kc)({
							...l,
							type: C.TestUriType.ResultExpectedOutput,
						})),
							(this.actualUri = (0, C.$3Kc)({
								...l,
								type: C.TestUriType.ResultActualOutput,
							})),
							(this.messageUri = (0, C.$3Kc)({
								...l,
								type: C.TestUriType.ResultMessage,
							}));
						const y = (this.message = s[this.messageIndex]);
						(this.context = (0, e.$cLc)(o, y)),
							(this.revealLocation =
								y.location ??
								(o.item.uri && o.item.range
									? { uri: o.item.uri, range: i.$iL.lift(o.item.range) }
									: void 0));
					}
				}
				e.$eLc = r;
				class u {
					get controllerId() {
						return this.result.tasks[this.taskIndex].ctrlId;
					}
					constructor(p, o) {
						(this.result = p),
							(this.taskIndex = o),
							(this.outputUri = (0, C.$3Kc)({
								resultId: p.id,
								taskIndex: o,
								type: C.TestUriType.TaskOutput,
							}));
					}
				}
				e.$fLc = u;
				class a {
					get controllerId() {
						return w.$k4.root(this.test.item.extId);
					}
					constructor(p, o, f) {
						(this.result = p),
							(this.taskIndex = o),
							(this.test = f),
							(this.outputUri = (0, C.$3Kc)({
								resultId: this.result.id,
								taskIndex: this.taskIndex,
								testExtId: this.test.item.extId,
								type: C.TestUriType.TestOutput,
							})),
							(this.task = p.tasks[this.taskIndex]);
					}
				}
				e.$gLc = a;
				const h = (g, p) =>
					(g instanceof r && p instanceof r && g.message === p.message) ||
					(g instanceof u &&
						p instanceof u &&
						g.result === p.result &&
						g.taskIndex === p.taskIndex) ||
					(g instanceof a &&
						p instanceof a &&
						g.test === p.test &&
						g.taskIndex === p.taskIndex);
				e.$hLc = h;
				const c = (g, p) => {
					for (let o = 0; o < g.tasks.length; o++) {
						const f = g.tasks[o];
						for (let b = 0; b < f.messages.length; b++) {
							const s = p(f, f.messages[b], b, o);
							if (s !== void 0) return s;
						}
					}
				};
				e.$iLc = c;
				const n = (g) => {
					if (g instanceof r) return g.test;
					if (!(g instanceof u)) return g.test.item;
				};
				e.$jLc = n;
			},
		),
		