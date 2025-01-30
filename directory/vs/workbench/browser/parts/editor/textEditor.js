import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/objects.js';
import '../../../../base/common/event.js';
import '../../../../base/common/types.js';
import '../../../../base/common/lifecycle.js';
import '../../../common/editor.js';
import '../../editor.js';
import './editorWithViewState.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/common/services/textResourceConfiguration.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/editor/common/editor.js';
import '../../../../platform/files/common/files.js';
define(
			de[718],
			he([
				1, 0, 4, 82, 6, 28, 3, 44, 192, 1016, 21, 5, 32, 35, 125, 66, 18, 116,
				22,
			]),
			function (ce /*require*/,
 e /*exports*/,
 t /*nls*/,
 i /*objects*/,
 w /*event*/,
 E /*types*/,
 C /*lifecycle*/,
 d /*editor*/,
 m /*editor*/,
 r /*editorWithViewState*/,
 u /*storage*/,
 a /*instantiation*/,
 h /*telemetry*/,
 c /*themeService*/,
 n /*textResourceConfiguration*/,
 g /*editorGroupsService*/,
 p /*editorService*/,
 o /*editor*/,
 f /*files*/) {
				"use strict";
				var b;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$CVb = e.$BVb = void 0);
				let s = class extends r.$zVb {
					static {
						b = this;
					}
					static {
						this.qb = "textEditorViewState";
					}
					constructor($, v, S, I, T, P, k, L, D, M) {
						super($, v, b.qb, S, I, T, P, k, L, D),
							(this.xb = M),
							(this.rb = this.D(new w.$re())),
							(this.onDidChangeSelection = this.rb.event),
							(this.sb = this.D(new w.$re())),
							(this.onDidChangeScroll = this.sb.event),
							(this.wb = this.D(new C.$2c())),
							this.D(this.s.onDidChangeConfiguration((N) => this.yb(N))),
							this.D(
								w.Event.any(
									this.cb.onDidAddGroup,
									this.cb.onDidRemoveGroup,
								)(() => {
									const N = this.Cb();
									this.tb?.setAttribute("aria-label", N),
										this.Mb({ ariaLabel: N });
								}),
							),
							this.D(
								this.xb.onDidChangeFileSystemProviderCapabilities((N) =>
									this.Db(N.scheme),
								),
							),
							this.D(
								this.xb.onDidChangeFileSystemProviderRegistrations((N) =>
									this.Db(N.scheme),
								),
							);
					}
					yb($) {
						const v = this.Rb();
						this.zb($, v) && (this.isVisible() ? this.Qb(v) : (this.ub = !0));
					}
					zb($, v) {
						return (
							$.affectsConfiguration(v, "editor") ||
							$.affectsConfiguration(v, "problems.visibility")
						);
					}
					Ab() {
						this.ub && (this.Qb(), (this.ub = !1));
					}
					Bb($) {
						const v = (0, E.$ng)($.editor)
							? (0, i.$vo)($.editor)
							: Object.create(null);
						return Object.assign(v, this.Hb($)), (v.ariaLabel = this.Cb()), v;
					}
					Cb() {
						return this.input
							? (0, m.$yVb)(this.input, void 0, this.group, this.cb.count)
							: (0, t.localize)(3553, null);
					}
					Db($) {
						this.input && this.Rb()?.scheme === $ && this.Fb(this.input);
					}
					Eb($) {
						this.input === $ && this.Fb($);
					}
					Fb($) {
						this.Mb({ ...this.Gb($.isReadonly()) });
					}
					Gb($) {
						return {
							readOnly: !!$,
							readOnlyMessage: typeof $ != "boolean" ? $ : void 0,
						};
					}
					Hb($) {
						return {
							overviewRulerLanes: 3,
							lineNumbersMinChars: 3,
							fixedOverflowWidgets: !0,
							...this.Gb(this.input?.isReadonly()),
							renderValidationDecorations:
								$.problems?.visibility !== !1 ? "on" : "off",
						};
					}
					Y($) {
						(this.tb = $),
							this.Lb($, this.Bb(this.s.getValue(this.Rb()))),
							this.Jb();
					}
					Jb() {
						const $ = this.Nb();
						$ &&
							(this.D($.onDidChangeModelLanguage(() => this.Qb())),
							this.D($.onDidChangeModel(() => this.Qb())),
							this.D(
								$.onDidChangeCursorPosition((v) =>
									this.rb.fire({ reason: this.Kb(v) }),
								),
							),
							this.D(
								$.onDidChangeModelContent(() =>
									this.rb.fire({
										reason: d.EditorPaneSelectionChangeReason.EDIT,
									}),
								),
							),
							this.D($.onDidScrollChange(() => this.sb.fire())));
					}
					Kb($) {
						switch ($.source) {
							case o.TextEditorSelectionSource.PROGRAMMATIC:
								return d.EditorPaneSelectionChangeReason.PROGRAMMATIC;
							case o.TextEditorSelectionSource.NAVIGATION:
								return d.EditorPaneSelectionChangeReason.NAVIGATION;
							case o.TextEditorSelectionSource.JUMP:
								return d.EditorPaneSelectionChangeReason.JUMP;
							default:
								return d.EditorPaneSelectionChangeReason.USER;
						}
					}
					getSelection() {
						const $ = this.Nb();
						if ($) {
							const v = $.getSelection();
							if (v) return new l(v);
						}
					}
					async setInput($, v, S, I) {
						await super.setInput($, v, S, I),
							(this.wb.value = $.onDidChangeCapabilities(() => this.Eb($))),
							this.Qb(),
							(0, E.$wg)(this.tb).setAttribute("aria-label", this.Cb());
					}
					clearInput() {
						this.wb.clear(), super.clearInput();
					}
					getScrollPosition() {
						const $ = this.Nb();
						if (!$) throw new Error("Control has not yet been initialized");
						return {
							scrollTop: $.getScrollTop() - $.getTopForLineNumber(1),
							scrollLeft: $.getScrollLeft(),
						};
					}
					setScrollPosition($) {
						const v = this.Nb();
						if (!v) throw new Error("Control has not yet been initialized");
						v.setScrollTop($.scrollTop),
							$.scrollLeft && v.setScrollLeft($.scrollLeft);
					}
					Z($) {
						$ && this.Ab(), super.Z($);
					}
					pb($) {
						return $.resource;
					}
					Qb($ = this.Rb()) {
						let v;
						if (($ && (v = this.s.getValue($)), !v)) return;
						const S = this.Bb(v);
						let I = S;
						this.vb && (I = (0, i.$Bo)(this.vb, I)),
							Object.keys(I).length > 0 && ((this.vb = S), this.Mb(I));
					}
					Rb() {
						const $ = this.Nb();
						if ($) {
							const v = $.getModel();
							if (v) return v.uri;
						}
						if (this.input) return this.input.resource;
					}
					dispose() {
						(this.vb = void 0), super.dispose();
					}
				};
				(e.$BVb = s),
					(e.$BVb =
						s =
						b =
							Ne(
								[
									j(2, h.$km),
									j(3, a.$Li),
									j(4, u.$lq),
									j(5, n.$XO),
									j(6, c.$iP),
									j(7, p.$IY),
									j(8, g.$EY),
									j(9, f.$ll),
								],
								s,
							));
				class l {
					static {
						this.a = 10;
					}
					constructor($) {
						this.b = $;
					}
					compare($) {
						if (!($ instanceof l))
							return d.EditorPaneSelectionCompareResult.DIFFERENT;
						const v = Math.min(
								this.b.selectionStartLineNumber,
								this.b.positionLineNumber,
							),
							S = Math.min(
								$.b.selectionStartLineNumber,
								$.b.positionLineNumber,
							);
						return v === S
							? d.EditorPaneSelectionCompareResult.IDENTICAL
							: Math.abs(v - S) < l.a
								? d.EditorPaneSelectionCompareResult.SIMILAR
								: d.EditorPaneSelectionCompareResult.DIFFERENT;
					}
					restore($) {
						return {
							...$,
							selection: this.b,
							selectionRevealType:
								o.TextEditorSelectionRevealType.CenterIfOutsideViewport,
						};
					}
					getSelection() {
						return this.b;
					}
					log() {
						return `line: ${this.b.startLineNumber}-${this.b.endLineNumber}, col:  ${this.b.startColumn}-${this.b.endColumn}`;
					}
				}
				e.$CVb = l;
			},
		),
		