import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../nls.js';
import '../../../../base/common/async.js';
import '../../../../base/common/htmlContent.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/browser/editorExtensions.js';
import '../../../../editor/contrib/snippet/browser/snippetController2.js';
import '../common/smartSnippetInserter.js';
import './keybindingWidgets.js';
import '../../../../base/common/json.js';
import '../../../services/keybinding/common/windowsKeyboardMapper.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../editor/common/core/editorColorRegistry.js';
import '../../../../editor/common/model.js';
import '../../../../base/common/keybindingParser.js';
import '../../../../base/common/types.js';
import '../../../../base/common/resources.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
import '../../../services/preferences/common/preferences.js';
define(
			de[3756],
			he([
				1, 0, 4, 15, 94, 3, 39, 5, 17, 46, 254, 3124, 1804, 187, 1825, 35, 307,
				64, 918, 28, 19, 133, 131,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*nls*/,
				i /*async*/,
				w /*htmlContent*/,
				E /*lifecycle*/,
				C /*keybinding*/,
				d /*instantiation*/,
				m /*range*/,
				r /*editorExtensions*/,
				u /*snippetController2*/,
				a /*smartSnippetInserter*/,
				h /*keybindingWidgets*/,
				c /*json*/,
				n /*windowsKeyboardMapper*/,
				g /*themeService*/,
				p /*editorColorRegistry*/,
				o /*model*/,
				f /*keybindingParser*/,
				b /*types*/,
				s /*resources*/,
				l /*userDataProfile*/,
				y /*preferences*/,
) {
				"use strict";
				var $;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$hEc = void 0),
					(t = mt(t));
				const v = t.localize(8371, null);
				let S = class extends E.$1c {
					constructor(k, L, D) {
						super(),
							(this.g = k),
							(this.h = L),
							(this.j = D),
							(this.c = this.D(new E.$2c())),
							(this.f = this.D(this.h.createInstance(h.$gBc, this.g))),
							this.D(this.g.onDidChangeModel((M) => this.m())),
							this.m();
					}
					m() {
						this.c.value = T(this.g, this.j)
							? this.h.createInstance(I, this.g)
							: void 0;
					}
					showDefineKeybindingWidget() {
						T(this.g, this.j) && this.f.start().then((k) => this.n(k));
					}
					n(k) {
						if ((this.g.focus(), k && this.g.hasModel())) {
							new RegExp(/\\/g).test(k) && (k = k.slice(0, -1) + "\\\\");
							let M = [
								"{",
								'	"key": ' + JSON.stringify(k) + ",",
								'	"command": "${1:commandId}",',
								'	"when": "${2:editorTextFocus}"',
								"}$0",
							].join(`
`);
							const N = a.$dEc.insertSnippet(
								this.g.getModel(),
								this.g.getPosition(),
							);
							(M = N.prepend + M + N.append),
								this.g.setPosition(N.position),
								u.$aDb
									.get(this.g)
									?.insert(M, { overwriteBefore: 0, overwriteAfter: 0 });
						}
					}
				};
				S = Ne([j(1, d.$Li), j(2, l.$P8)], S);
				let I = ($ = class extends E.$1c {
					constructor(k, L) {
						super(),
							(this.g = k),
							(this.h = L),
							(this.f = this.g.createDecorationsCollection()),
							(this.c = this.D(new i.$Yh(() => this.j(), 500)));
						const D = (0, b.$wg)(this.g.getModel());
						this.D(D.onDidChangeContent(() => this.c.schedule())),
							this.D(this.h.onDidUpdateKeybindings(() => this.c.schedule())),
							this.D({
								dispose: () => {
									this.f.clear(), this.c.cancel();
								},
							}),
							this.c.schedule();
					}
					j() {
						const k = (0, b.$wg)(this.g.getModel()),
							L = [],
							D = (0, c.$eo)(k.getValue());
						if (D && Array.isArray(D.children))
							for (let M = 0, N = D.children.length; M < N; M++) {
								const A = D.children[M],
									R = this.m(k, A);
								R !== null && L.push(R);
							}
						this.f.set(L);
					}
					m(k, L) {
						if (!Array.isArray(L.children)) return null;
						for (let D = 0, M = L.children.length; D < M; D++) {
							const N = L.children[D];
							if (
								N.type !== "property" ||
								!Array.isArray(N.children) ||
								N.children.length !== 2 ||
								N.children[0].value !== "key"
							)
								continue;
							const R = N.children[1];
							if (R.type !== "string") continue;
							const O = this.h.resolveUserBinding(R.value);
							if (O.length === 0) return this.n(!0, null, null, k, R);
							const B = O[0];
							let U = null;
							if (
								(B instanceof n.$fEc && (U = B.getUSLabel()), !B.isWYSIWYG())
							) {
								const F = B.getLabel();
								return typeof F == "string" &&
									R.value.toLowerCase() === F.toLowerCase()
									? null
									: this.n(!1, B.getLabel(), U, k, R);
							}
							if (/abnt_|oem_/.test(R.value))
								return this.n(!1, B.getLabel(), U, k, R);
							const z = B.getUserSettingsLabel();
							return typeof z == "string" &&
								!$._userSettingsFuzzyEquals(R.value, z)
								? this.n(!1, B.getLabel(), U, k, R)
								: null;
						}
						return null;
					}
					static _userSettingsFuzzyEquals(k, L) {
						if (
							((k = k.trim().toLowerCase()),
							(L = L.trim().toLowerCase()),
							k === L)
						)
							return !0;
						const D = f.$Xpb.parseKeybinding(k),
							M = f.$Xpb.parseKeybinding(L);
						return D === null && M === null ? !0 : !D || !M ? !1 : D.equals(M);
					}
					n(k, L, D, M, N) {
						let A, R, O;
						k
							? ((A = new w.$cl().appendText(v)),
								(R = "keybindingError"),
								(O = (0, g.$jP)(p.$9T)))
							: (D && L !== D
									? (A = new w.$cl(t.localize(8372, null, L, D)))
									: (A = new w.$cl(t.localize(8373, null, L))),
								(R = "keybindingInfo"),
								(O = (0, g.$jP)(p.$$T)));
						const B = M.getPositionAt(N.offset),
							U = M.getPositionAt(N.offset + N.length);
						return {
							range: new m.$iL(B.lineNumber, B.column, U.lineNumber, U.column),
							options: {
								description: "keybindings-widget",
								stickiness:
									o.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
								className: R,
								hoverMessage: A,
								overviewRuler: {
									color: O,
									position: o.OverviewRulerLane.Right,
								},
							},
						};
					}
				});
				(e.$hEc = I), (e.$hEc = I = $ = Ne([j(1, C.$uZ)], I));
				function T(P, k) {
					const L = P.getModel();
					return L
						? (0, s.$gh)(L.uri, k.currentProfile.keybindingsResource)
						: !1;
				}
				(0, r.$qtb)(
					y.$8Z,
					S,
					r.EditorContributionInstantiation.AfterFirstRender,
				);
			},
		),
		