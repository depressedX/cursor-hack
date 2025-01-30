import '../../../../require.js';
import '../../../../exports.js';
import '../../../base/common/errors.js';
import './extHostTypeConverters.js';
import './extHostTypes.js';
define(Pe[302], Ne([1, 0, 12, 17, 11]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$tid = void 0),
				(r = tt(r)),
				(S = tt(S));
			class N {
				static {
					this.apiEditorsToExtHost = new WeakMap();
				}
				constructor(I, l, n, p, y, d) {
					(this.id = I),
						(this.f = l),
						(this.notebookData = n),
						(this.a = []),
						(this.b = []),
						(this.d = !1),
						(this.a = y),
						(this.b = p),
						(this.c = d);
				}
				get apiEditor() {
					if (!this.e) {
						const I = this;
						(this.e = {
							get notebook() {
								return I.notebookData.apiNotebook;
							},
							get selection() {
								return I.a[0];
							},
							set selection(l) {
								this.selections = [l];
							},
							get selections() {
								return I.a;
							},
							set selections(l) {
								if (!Array.isArray(l) || !l.every(S.$Rcb.isNotebookRange))
									throw (0, e.$$)("selections");
								(I.a = l), I.g(l);
							},
							get visibleRanges() {
								return I.b;
							},
							revealRange(l, n) {
								I.f.$tryRevealRange(
									I.id,
									r.NotebookRange.from(l),
									n ?? S.NotebookEditorRevealType.Default,
								);
							},
							get viewColumn() {
								return I.c;
							},
							[Symbol.for("debug.description")]() {
								return `NotebookEditor(${this.notebook.uri.toString()})`;
							},
						}),
							N.apiEditorsToExtHost.set(this.e, this);
					}
					return this.e;
				}
				get visible() {
					return this.d;
				}
				_acceptVisibility(I) {
					this.d = I;
				}
				_acceptVisibleRanges(I) {
					this.b = I;
				}
				_acceptSelections(I) {
					this.a = I;
				}
				g(I) {
					this.f.$trySetSelections(this.id, I.map(r.NotebookRange.from));
				}
				_acceptViewColumn(I) {
					this.c = I;
				}
			}
			t.$tid = N;
		}),
		