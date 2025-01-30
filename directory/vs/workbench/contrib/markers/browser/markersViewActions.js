import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../platform/contextview/browser/contextView.js';
import './messages.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/event.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/themables.js';
import '../../../../base/browser/ui/actionbar/actionViewItems.js';
import '../common/markers.js';
import '../../../../css!vs/workbench/contrib/markers/browser/markersViewActions.js';
define(
		de[1248],
		he([1, 0, 7, 50, 49, 799, 3, 6, 14, 26, 198, 555, 2449]),
		function (ce /*require*/,
 e /*exports*/,
 t /*dom*/,
 i /*actions*/,
 w /*contextView*/,
 E /*messages*/,
 C /*lifecycle*/,
 d /*event*/,
 m /*codicons*/,
 r /*themables*/,
 u /*actionViewItems*/,
 a /*markers*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$ARc = e.$zRc = e.$yRc = void 0),
				(t = mt(t)),
				(E = xi(E));
			class h extends C.$1c {
				constructor(p, o) {
					super(),
						(this.b = o),
						(this.a = this.D(new d.$re())),
						(this.onDidChange = this.a.event),
						(this.c =
							a.MarkersContextKeys.ShowExcludedFilesFilterContextKey.bindTo(
								this.b,
							)),
						(this.f =
							a.MarkersContextKeys.ShowActiveFileFilterContextKey.bindTo(
								this.b,
							)),
						(this.g = a.MarkersContextKeys.ShowWarningsFilterContextKey.bindTo(
							this.b,
						)),
						(this.h = a.MarkersContextKeys.ShowErrorsFilterContextKey.bindTo(
							this.b,
						)),
						(this.j = a.MarkersContextKeys.ShowInfoFilterContextKey.bindTo(
							this.b,
						)),
						this.h.set(p.showErrors),
						this.g.set(p.showWarnings),
						this.j.set(p.showInfos),
						this.c.set(p.excludedFiles),
						this.f.set(p.activeFile),
						(this.filterHistory = p.filterHistory);
				}
				get excludedFiles() {
					return !!this.c.get();
				}
				set excludedFiles(p) {
					this.c.get() !== p &&
						(this.c.set(p), this.a.fire({ excludedFiles: !0 }));
				}
				get activeFile() {
					return !!this.f.get();
				}
				set activeFile(p) {
					this.f.get() !== p &&
						(this.f.set(p), this.a.fire({ activeFile: !0 }));
				}
				get showWarnings() {
					return !!this.g.get();
				}
				set showWarnings(p) {
					this.g.get() !== p &&
						(this.g.set(p), this.a.fire({ showWarnings: !0 }));
				}
				get showErrors() {
					return !!this.h.get();
				}
				set showErrors(p) {
					this.h.get() !== p &&
						(this.h.set(p), this.a.fire({ showErrors: !0 }));
				}
				get showInfos() {
					return !!this.j.get();
				}
				set showInfos(p) {
					this.j.get() !== p && (this.j.set(p), this.a.fire({ showInfos: !0 }));
				}
			}
			e.$yRc = h;
			class c extends i.$rj {
				static {
					this.ID = "workbench.actions.problems.quickfix";
				}
				static {
					this.a =
						"markers-panel-action-quickfix " +
						r.ThemeIcon.asClassName(m.$ak.lightBulb);
				}
				static {
					this.b = c.a + " autofixable";
				}
				get quickFixes() {
					return this.f;
				}
				set quickFixes(p) {
					(this.f = p), (this.enabled = this.f.length > 0);
				}
				autoFixable(p) {
					this.class = p ? c.b : c.a;
				}
				constructor(p) {
					super(c.ID, E.default.MARKERS_PANEL_ACTION_TOOLTIP_QUICKFIX, c.a, !1),
						(this.marker = p),
						(this.c = this.D(new d.$re())),
						(this.onShowQuickFixes = this.c.event),
						(this.f = []);
				}
				run() {
					return this.c.fire(), Promise.resolve();
				}
			}
			e.$zRc = c;
			let n = class extends u.$_ib {
				constructor(p, o, f) {
					super(null, p, { ...o, icon: !0, label: !1 }), (this.a = f);
				}
				onClick(p) {
					t.$ahb.stop(p, !0), this.showQuickFixes();
				}
				showQuickFixes() {
					if (!this.element || !this.isEnabled()) return;
					const p = t.$tgb(this.element),
						o = this.action.quickFixes;
					o.length &&
						this.a.showContextMenu({
							getAnchor: () => ({ x: p.left + 10, y: p.top + p.height + 4 }),
							getActions: () => o,
						});
				}
			};
			(e.$ARc = n), (e.$ARc = n = Ne([j(2, w.$Xxb)], n));
		},
	);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	