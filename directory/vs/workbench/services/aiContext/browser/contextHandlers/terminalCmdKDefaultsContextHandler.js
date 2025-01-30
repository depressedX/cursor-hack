import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../../editor/common/services/resolverService.js';
import '../../../../../platform/workspace/common/workspace.js';
import './terminalContextHandler.js';
import '../../../../../platform/instantiation/common/instantiation.js';
import '../../../../../base/common/uuid.js';
define(
			de[3668],
			he([1, 0, 42, 25, 1876, 5, 47]),
			function (ce /*require*/,
 e /*exports*/,
 t /*resolverService*/,
 i /*workspace*/,
 w /*terminalContextHandler*/,
 E /*instantiation*/,
 C /*uuid*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QZc = void 0);
				let d = class {
					constructor(r, u, a, h) {
						(this.a = r),
							(this.b = u),
							(this.c = a),
							(this.d = h),
							(this.e = new AbortController()),
							(this.f = void 0),
							(this.g = void 0),
							(this.h = []),
							(this.i = []);
					}
					async processItems() {
						return await this.a.newItems([...this.h, ...this.i]);
					}
					async process(r, u) {
						if (this.e.signal.aborted) return;
						const a = [
							{
								intent: u,
								item: { case: "terminalCmdKQuery", value: { query: r.query } },
							},
						];
						r.queryHistory &&
							a.push({
								intent: u,
								item: {
									case: "terminalCmdKQueryHistory",
									value: r.queryHistory,
								},
							}),
							r.chatHistory &&
								a.push({
									intent: u,
									item: {
										case: "chatHistory",
										value: { ...r.chatHistory, activeForCmdK: !0 },
									},
								}),
							(this.h = a),
							await this.processItems();
					}
					update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(r, u) {
						this.process(r, u),
							this.f === void 0 &&
								((this.f = this.d.createInstance(w.$PZc, {
									...this.a,
									newItems: (a) => ((this.i = a), this.processItems()),
								})),
								(this.g = (0, C.$9g)())),
							this.f.update_IS_CALLED_ON_EVERY_KEYSTROKE_SO_BE_CAREFUL(r, {
								type: u.type,
								uuid: this.g,
								intent: {
									case: "terminalHistory",
									value: { instanceId: r.instanceId, activeForCmdK: !0 },
								},
							});
					}
					async blockForFinalInput(r, u) {
						return (
							this.f === void 0 &&
								((this.f = this.d.createInstance(w.$PZc, {
									...this.a,
									newItems: (a) => ((this.i = a), this.processItems()),
								})),
								(this.g = (0, C.$9g)())),
							await Promise.all([
								this.process(r, u),
								this.f.blockForFinalInput(r, {
									type: u.type,
									uuid: this.g,
									intent: {
										case: "terminalHistory",
										value: { instanceId: r.instanceId, activeForCmdK: !0 },
									},
								}),
							]),
							"useFreshItemsEvenIfNotRerankedYet"
						);
					}
					freeze() {
						this.e.abort(), this.f?.freeze();
					}
					unfreeze() {
						(this.e = new AbortController()), this.f?.unfreeze();
					}
					dispose() {
						this.e.abort(), this.f?.dispose();
					}
				};
				(e.$QZc = d),
					(e.$QZc = d = Ne([j(1, i.$Vi), j(2, t.$MO), j(3, E.$Li)], d));
			},
		),
		