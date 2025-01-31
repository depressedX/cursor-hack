import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/browser/window.js';
import '../../../../base/common/errors.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/ports.js';
import '../../../../nls.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/extensions/common/extensions.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/native/common/native.js';
import '../../../../platform/product/common/productService.js';
import '../common/runtimeExtensionsInput.js';
import './runtimeExtensionsEditor.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensionHostKind.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/extensions/electron-sandbox/extensionHostProfiler.js';
import '../../../services/statusbar/browser/statusbar.js';
define(
			de[3631],
			he([
				1, 0, 7, 75, 29, 6, 3, 1501, 4, 31, 57, 109, 5, 110, 62, 985, 1295, 18,
				517, 53, 1823, 166,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*window*/,
				w /*errors*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*ports*/,
				m /*nls*/,
				r /*commands*/,
				u /*dialogs*/,
				a /*extensions*/,
				h /*instantiation*/,
				c /*native*/,
				n /*productService*/,
				g /*runtimeExtensionsInput*/,
				p /*runtimeExtensionsEditor*/,
				o /*editorService*/,
				f /*extensionHostKind*/,
				b /*extensions*/,
				s /*extensionHostProfiler*/,
				l /*statusbar*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$_fd = void 0),
					(m = mt(m));
				let y = class extends C.$1c {
					get state() {
						return this.h;
					}
					get lastProfile() {
						return this.f;
					}
					constructor(v, S, I, T, P, k, L) {
						super(),
							(this.n = v),
							(this.q = S),
							(this.r = I),
							(this.s = T),
							(this.t = P),
							(this.u = k),
							(this.w = L),
							(this.a = this.D(new E.$re())),
							(this.onDidChangeState = this.a.event),
							(this.b = this.D(new E.$re())),
							(this.onDidChangeLastProfile = this.b.event),
							(this.c = new a.$In()),
							(this.h = p.ProfileSessionState.None),
							(this.m = this.D(new C.$2c())),
							(this.f = null),
							(this.g = null),
							this.y(p.ProfileSessionState.None),
							r.$fk.registerCommand(
								"workbench.action.extensionHostProfiler.stop",
								() => {
									this.stopProfiling(),
										this.q.openEditor(g.$UTc.instance, { pinned: !0 });
								},
							);
					}
					y(v) {
						this.h !== v &&
							((this.h = v),
							this.h === p.ProfileSessionState.Running
								? this.z(!0)
								: this.h === p.ProfileSessionState.Stopping && this.z(!1),
							this.a.fire(void 0));
					}
					z(v) {
						if ((this.m.clear(), v)) {
							const S = {
									name: m.localize(6604, null),
									text: m.localize(6605, null),
									showProgress: !0,
									ariaLabel: m.localize(6606, null),
									tooltip: m.localize(6607, null),
									command: "workbench.action.extensionHostProfiler.stop",
								},
								I = Date.now(),
								T = (0, t.$igb)(
									i.$Bfb,
									() => {
										this.j?.update({
											...S,
											text: m.localize(
												6608,
												null,
												Math.round((new Date().getTime() - I) / 1e3),
											),
										});
									},
									1e3,
								);
							(this.m.value = T),
								this.j
									? this.j.update(S)
									: (this.j = this.u.addEntry(
											S,
											"status.profiler",
											l.StatusbarAlignment.RIGHT,
										));
						} else this.j && (this.j.dispose(), (this.j = void 0));
					}
					async startProfiling() {
						if (this.h !== p.ProfileSessionState.None) return null;
						const v = await this.n.getInspectPorts(
							f.ExtensionHostKind.LocalProcess,
							!0,
						);
						return v.length === 0
							? this.t
									.confirm({
										type: "info",
										message: m.localize(6609, null),
										detail: m.localize(6610, null, this.w.nameLong),
										primaryButton: m.localize(6611, null),
									})
									.then((S) => {
										S.confirmed &&
											this.s.relaunch({
												addArgs: [`--inspect-extensions=${(0, d.$1pb)()}`],
											});
									})
							: (v.length > 1 &&
									console.warn(
										"There are multiple extension hosts available for profiling. Picking the first one...",
									),
								this.y(p.ProfileSessionState.Starting),
								this.r
									.createInstance(s.$$fd, v[0].host, v[0].port)
									.start()
									.then(
										(S) => {
											(this.g = S), this.y(p.ProfileSessionState.Running);
										},
										(S) => {
											(0, w.$4)(S), this.y(p.ProfileSessionState.None);
										},
									));
					}
					stopProfiling() {
						this.h !== p.ProfileSessionState.Running ||
							!this.g ||
							(this.y(p.ProfileSessionState.Stopping),
							this.g.stop().then(
								(v) => {
									this.C(v), this.y(p.ProfileSessionState.None);
								},
								(v) => {
									(0, w.$4)(v), this.y(p.ProfileSessionState.None);
								},
							),
							(this.g = null));
					}
					C(v) {
						(this.f = v), this.b.fire(void 0);
					}
					getUnresponsiveProfile(v) {
						return this.c.get(v);
					}
					setUnresponsiveProfile(v, S) {
						this.c.set(v, S), this.C(S);
					}
				};
				(e.$_fd = y),
					(e.$_fd = y =
						Ne(
							[
								j(0, b.$q2),
								j(1, o.$IY),
								j(2, h.$Li),
								j(3, c.$y7c),
								j(4, u.$GO),
								j(5, l.$d6b),
								j(6, n.$Bk),
							],
							y,
						));
			},
		)
