import '../../../../../../require.js';
import '../../../../../../exports.js';
import '../../../../services/textfile/common/textfiles.js';
import '../../../../services/lifecycle/common/lifecycle.js';
import '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/arrays.js';
import '../../../../services/host/browser/host.js';
import '../../../../services/editor/common/editorService.js';
import '../../../../../base/common/async.js';
import '../../../../../editor/browser/services/codeEditorService.js';
import '../../../../services/filesConfiguration/common/filesConfigurationService.js';
import '../../common/files.js';
import '../../../../../base/common/network.js';
import '../../../../services/untitled/common/untitledTextEditorInput.js';
import '../../../../services/workingCopy/common/workingCopyEditorService.js';
import '../../../../common/editor.js';
define(
			de[3855],
			he([1, 0, 85, 52, 3, 24, 87, 18, 15, 65, 170, 220, 23, 628, 403, 44]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$1Mc = void 0);
				let p = class extends w.$1c {
					static {
						this.ID = "workbench.contrib.textFileEditorTracker";
					}
					constructor(f, b, s, l, y, $, v) {
						super(),
							(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.f = l),
							(this.g = y),
							(this.h = $),
							(this.j = v),
							(this.n = this.D(new m.$1h((S) => this.r(S), this.q()))),
							this.m();
					}
					m() {
						this.D(
							this.b.files.onDidChangeDirty((f) => this.n.work(f.resource)),
						),
							this.D(
								this.b.files.onDidSaveError((f) => this.n.work(f.resource)),
							),
							this.D(
								this.b.untitled.onDidChangeDirty((f) =>
									this.n.work(f.resource),
								),
							),
							this.D(this.f.onDidChangeFocus((f) => (f ? this.t() : void 0))),
							this.D(this.c.onDidShutdown(() => this.dispose()));
					}
					q() {
						return 800;
					}
					r(f) {
						this.s(
							(0, E.$Qb)(
								f.filter((b) => {
									if (!this.b.isDirty(b)) return !1;
									const s = this.b.files.get(b);
									if (
										s?.hasState(t.TextFileEditorModelState.PENDING_SAVE) ||
										(b.scheme !== h.Schemas.untitled &&
											!s?.hasState(t.TextFileEditorModelState.ERROR) &&
											this.h.hasShortAutoSaveDelay(b)) ||
										this.a.isOpened({
											resource: b,
											typeId:
												b.scheme === h.Schemas.untitled ? c.$T1b.ID : a.$QUb,
											editorId: g.$b1.id,
										})
									)
										return !1;
									const l = s ?? this.b.untitled.get(b);
									return !(l && this.j.findEditor(l));
								}),
								(b) => b.toString(),
							),
						);
					}
					s(f) {
						f.length &&
							this.a.openEditors(
								f.map((b) => ({
									resource: b,
									options: { inactive: !0, pinned: !0, preserveFocus: !0 },
								})),
							);
					}
					t() {
						(0, E.$Qb)(
							(0, E.$Lb)(
								this.g.listCodeEditors().map((f) => {
									const b = f.getModel()?.uri;
									if (!b) return;
									const s = this.b.files.get(b);
									if (!(!s || s.isDirty() || !s.isResolved())) return s;
								}),
							),
							(f) => f.resource.toString(),
						).forEach((f) =>
							this.b.files.resolve(f.resource, { reload: { async: !0 } }),
						);
					}
				};
				(e.$1Mc = p),
					(e.$1Mc = p =
						Ne(
							[
								j(0, d.$IY),
								j(1, t.$kZ),
								j(2, i.$n6),
								j(3, C.$asb),
								j(4, r.$dtb),
								j(5, u.$_Y),
								j(6, n.$bZ),
							],
							p,
						));
			},
		),
		