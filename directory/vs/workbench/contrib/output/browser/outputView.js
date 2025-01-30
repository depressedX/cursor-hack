import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/contextkey/common/contextkey.js';
import '../../../browser/parts/editor/textResourceEditor.js';
import '../../../services/output/common/output.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../editor/common/cursorEvents.js';
import '../../../browser/parts/views/viewPane.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../common/views.js';
import '../../../common/editor/textResourceEditorInput.js';
import '../../../../platform/opener/common/opener.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/async.js';
import '../../../../platform/files/common/files.js';
import '../../../common/contextkeys.js';
import '../../../../platform/instantiation/common/serviceCollection.js';
import '../../../browser/editor.js';
import '../../../../platform/hover/browser/hover.js';
import '../../../../css!vs/workbench/contrib/output/browser/output.js';
define(
			de[1919],
			he([
				1, 0, 4, 32, 21, 125, 5, 8, 1917, 297, 35, 10, 66, 18, 248, 146, 39, 49,
				60, 478, 41, 7, 15, 22, 100, 128, 192, 72, 2474,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*telemetry*/,
				w /*storage*/,
				E /*textResourceConfiguration*/,
				C /*instantiation*/,
				d /*contextkey*/,
				m /*textResourceEditor*/,
				r /*output*/,
				u /*themeService*/,
				a /*configuration*/,
				h /*editorGroupsService*/,
				c /*editorService*/,
				n /*cursorEvents*/,
				g /*viewPane*/,
				p /*keybinding*/,
				o /*contextView*/,
				f /*views*/,
				b /*textResourceEditorInput*/,
				s /*opener*/,
				l /*dom*/,
				y /*async*/,
				$ /*files*/,
				v /*contextkeys*/,
				S /*serviceCollection*/,
				I /*editor*/,
				T /*hover*/,
) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$aUc = void 0),
					(t = mt(t));
				let P = class extends g.$TMb {
					get scrollLock() {
						return !!this.f.get();
					}
					set scrollLock(D) {
						this.f.set(D);
					}
					constructor(D, M, N, A, R, O, B, U, z, F, x) {
						super(D, M, N, A, R, O, B, U, z, F, x),
							(this.c = null),
							(this.f = r.$n8.bindTo(this.Bb));
						const H = this.D(B.createChild(new S.$Ki([d.$6j, this.xb])));
						(this.a = this.D(H.createInstance(k))),
							this.D(
								this.a.onTitleAreaUpdate(() => {
									this.Sb(this.a.getTitle()), this.bc();
								}),
							),
							this.D(
								this.onDidChangeBodyVisibility(() =>
									this.j(this.isBodyVisible()),
								),
							);
					}
					showChannel(D, M) {
						this.b !== D.id && this.m(D), M || this.focus();
					}
					focus() {
						super.focus(), this.c?.then(() => this.a.focus());
					}
					W(D) {
						super.W(D), this.a.create(D), D.classList.add("output-view");
						const M = this.a.getControl();
						M.setAriaOptions({ role: "document", activeDescendant: void 0 }),
							this.D(
								M.onDidChangeModelContent(() => {
									this.scrollLock || this.a.revealLastLine();
								}),
							),
							this.D(
								M.onDidChangeCursorPosition((N) => {
									if (
										N.reason !== n.CursorChangeReason.Explicit ||
										!this.Ab.getValue("output.smartScroll.enabled")
									)
										return;
									const A = M.getModel();
									if (A) {
										const R = N.position.lineNumber,
											O = A.getLineCount();
										this.scrollLock = O !== R;
									}
								}),
							);
					}
					X(D, M) {
						super.X(D, M), this.a.layout(new l.$pgb(M, D));
					}
					j(D) {
						this.a.setVisible(D), D || this.n();
					}
					m(D) {
						this.b = D.id;
						const M = this.r(D);
						(!this.a.input || !M.matches(this.a.input)) &&
							(this.c?.cancel(),
							(this.c = (0, y.$zh)((N) =>
								this.a
									.setInput(
										this.r(D),
										{ preserveFocus: !0 },
										Object.create(null),
										N,
									)
									.then(() => this.a),
							)));
					}
					n() {
						(this.b = void 0), this.a.clearInput(), (this.c = null);
					}
					r(D) {
						return this.Db.createInstance(
							b.$S1b,
							D.uri,
							t.localize(8320, null, D.label),
							t.localize(8321, null, D.label),
							void 0,
							void 0,
						);
					}
				};
				(e.$aUc = P),
					(e.$aUc = P =
						Ne(
							[
								j(1, p.$uZ),
								j(2, o.$Xxb),
								j(3, a.$gj),
								j(4, d.$6j),
								j(5, f.$K1),
								j(6, C.$Li),
								j(7, s.$7rb),
								j(8, u.$iP),
								j(9, i.$km),
								j(10, T.$Uyb),
							],
							P,
						));
				let k = class extends m.$kuc {
					constructor(D, M, N, A, R, O, B, U, z) {
						super(r.$h8, B.activeGroup, D, M, N, R, O, B, U, z),
							(this.$ = A),
							(this.c = this.D(M.createInstance(v.$BQb)));
					}
					getId() {
						return r.$h8;
					}
					getTitle() {
						return t.localize(8322, null);
					}
					Hb(D) {
						const M = super.Hb(D);
						(M.wordWrap = "on"),
							(M.lineNumbers = "off"),
							(M.glyphMargin = !1),
							(M.lineDecorationsWidth = 20),
							(M.rulers = []),
							(M.folding = !1),
							(M.scrollBeyondLastLine = !1),
							(M.renderLineHighlight = "none"),
							(M.minimap = { enabled: !1 }),
							(M.renderValidationDecorations = "editable"),
							(M.padding = void 0),
							(M.readOnly = !0),
							(M.domReadOnly = !0),
							(M.unicodeHighlight = {
								nonBasicASCII: !1,
								invisibleCharacters: !1,
								ambiguousCharacters: !1,
							});
						const N = this.$.getValue("[Log]");
						return (
							N &&
								(N["editor.minimap.enabled"] && (M.minimap = { enabled: !0 }),
								"editor.wordWrap" in N && (M.wordWrap = N["editor.wordWrap"])),
							M
						);
					}
					Yb() {
						return this.input
							? this.input.getAriaLabel()
							: t.localize(8323, null);
					}
					Cb() {
						return this.input
							? (0, I.$yVb)(this.input, void 0, void 0, this.cb.count)
							: this.Yb();
					}
					async setInput(D, M, N, A) {
						const R = !(M && M.preserveFocus);
						(this.input && D.matches(this.input)) ||
							(this.input && this.input.dispose(),
							await super.setInput(D, M, N, A),
							this.c.set(D.resource),
							R && this.focus(),
							this.revealLastLine());
					}
					clearInput() {
						this.input && this.input.dispose(),
							super.clearInput(),
							this.c.reset();
					}
					Y(D) {
						D.setAttribute("role", "document"), super.Y(D);
						const M = this.scopedContextKeyService;
						M && r.$i8.bindTo(M).set(!0);
					}
				};
				k = Ne(
					[
						j(0, i.$km),
						j(1, C.$Li),
						j(2, w.$lq),
						j(3, a.$gj),
						j(4, E.$XO),
						j(5, u.$iP),
						j(6, h.$EY),
						j(7, c.$IY),
						j(8, $.$ll),
					],
					k,
				);
			},
		),
		