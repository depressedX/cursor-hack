import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/browser.js';
import '../../../../base/common/async.js';
import '../../../../base/common/codicons.js';
import '../../../../base/common/iconLabels.js';
import '../../../../base/common/keyCodes.js';
import '../../../../base/common/platform.js';
import '../../../../base/common/themables.js';
import '../../../../editor/contrib/quickAccess/browser/commandsQuickAccess.js';
import '../../../../nls.js';
import '../../../../platform/action/common/action.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/dialogs/common/dialogs.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/keybinding/common/keybinding.js';
import '../../../../platform/keybinding/common/keybindingsRegistry.js';
import '../../../../platform/product/common/productService.js';
import '../../../../platform/quickinput/browser/commandsQuickAccess.js';
import '../../../../platform/quickinput/browser/pickerQuickAccess.js';
import '../../../../platform/quickinput/common/quickAccess.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/telemetry/common/telemetry.js';
import '../../chat/browser/actions/chatActions.js';
import '../../chat/browser/actions/chatQuickInputActions.js';
import '../../chat/common/chatAgents.js';
import '../../../services/aiRelatedInformation/common/aiRelatedInformation.js';
import '../../../services/editor/common/editorGroupsService.js';
import '../../../services/editor/common/editorService.js';
import '../../../services/extensions/common/extensions.js';
import '../../../services/preferences/browser/keybindingsEditorModel.js';
import '../../../services/preferences/common/preferences.js';
define(
			de[4107],
			he([
				1, 0, 139, 15, 14, 274, 27, 12, 26, 2900, 4, 599, 11, 31, 10, 57, 5, 39,
				43, 62, 679, 392, 348, 63, 21, 32, 402, 1358, 153, 1013, 66, 18, 53,
				1309, 131,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*browser*/,
				i /*async*/,
				w /*codicons*/,
				E /*iconLabels*/,
				C /*keyCodes*/,
				d /*platform*/,
				m /*themables*/,
				r /*commandsQuickAccess*/,
				u /*nls*/,
				a /*action*/,
				h /*actions*/,
				c /*commands*/,
				n /*configuration*/,
				g /*dialogs*/,
				p /*instantiation*/,
				o /*keybinding*/,
				f /*keybindingsRegistry*/,
				b /*productService*/,
				s /*commandsQuickAccess*/,
				l /*pickerQuickAccess*/,
				y /*quickAccess*/,
				$ /*quickInput*/,
				v /*storage*/,
				S /*telemetry*/,
				I /*chatActions*/,
				T /*chatQuickInputActions*/,
				P /*chatAgents*/,
				k /*aiRelatedInformation*/,
				L /*editorGroupsService*/,
				D /*editorService*/,
				M /*extensions*/,
				N /*keybindingsEditorModel*/,
				A /*preferences*/,
) {
				"use strict";
				var R;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$QMc = e.$PMc = e.$OMc = void 0);
				let O = class extends r.$NMc {
					static {
						R = this;
					}
					static {
						this.M = 5;
					}
					static {
						this.N = 0.8;
					}
					static {
						this.O = 200;
					}
					get J() {
						return this.S.activeTextEditorControl;
					}
					get defaultFilterValue() {
						if (this.cb.preserveInput)
							return y.DefaultQuickAccessFilterValue.LAST;
					}
					constructor(F, x, H, q, V, G, K, J, W, X, Y, ie, ne, ee) {
						super(
							{
								showAlias: !d.Language.isDefaultVariant(),
								noResultsPick: () => ({
									label: (0, u.localize)(8686, null),
									commandId: "",
								}),
							},
							q,
							V,
							G,
							K,
							J,
						),
							(this.S = F),
							(this.U = x),
							(this.W = H),
							(this.X = W),
							(this.Y = X),
							(this.Z = Y),
							(this.$ = ie),
							(this.ab = ne),
							(this.bb = ee),
							(this.P = (0, i.$Dh)(
								this.W.whenInstalledExtensionsRegistered(),
								800,
							)),
							(this.Q = !1),
							this.D(W.onDidChangeConfiguration((_) => this.db(_))),
							this.db();
					}
					get cb() {
						const F = this.X.getValue().workbench.commandPalette;
						return {
							preserveInput: F.preserveInput,
							experimental: F.experimental,
						};
					}
					db(F) {
						if (
							F &&
							!F.affectsConfiguration("workbench.commandPalette.experimental")
						)
							return;
						const x = this.cb,
							H =
								x.experimental.suggestCommands &&
								this.$.commandPaletteSuggestedCommandIds?.length
									? new Set(this.$.commandPaletteSuggestedCommandIds)
									: void 0;
						(this.f.suggestedCommandIds = H),
							(this.Q = x.experimental.enableNaturalLanguageSearch);
					}
					async G(F) {
						return (
							await this.P,
							F.isCancellationRequested
								? []
								: [...this.L(), ...this.ib()].map((x) => ({
										...x,
										buttons: [
											{
												iconClass: m.ThemeIcon.asClassName(w.$ak.gear),
												tooltip: (0, u.localize)(8687, null),
											},
										],
										trigger: () => (
											this.Z.openGlobalKeybindingSettings(!1, {
												query: (0, N.$rvc)(x.commandId, x.commandWhen),
											}),
											l.TriggerAction.CLOSE_PICKER
										),
									}))
						);
					}
					H(F, x) {
						return !(
							!this.Q ||
							x.isCancellationRequested ||
							F === "" ||
							!this.ab.isEnabled()
						);
					}
					async I(F, x, H, q) {
						if (!this.H(H, q)) return [];
						let V;
						try {
							await (0, i.$Nh)(R.O, q), (V = await this.hb(F, x, H, q));
						} catch {
							return [];
						}
						(x.length || V.length) && V.push({ type: "separator" });
						const G = this.bb.getDefaultAgent(P.ChatAgentLocation.Panel);
						return (
							G &&
								V.push({
									label: (0, u.localize)(8688, null, G.fullName, H),
									commandId:
										this.cb.experimental.askChatLocation === "quickChat"
											? T.$o9b
											: I.$4Yb,
									args: [H],
								}),
							V
						);
					}
					async hb(F, x, H, q) {
						const V = await this.ab.getRelatedInformation(
							H,
							[k.RelatedInformationType.CommandInformation],
							q,
						);
						V.sort((J, W) => W.weight - J.weight);
						const G = new Set(x.map((J) => J.commandId)),
							K = new Array();
						for (const J of V) {
							if (J.weight < R.N || K.length === R.M) break;
							const W = F.find(
								(X) => X.commandId === J.command && !G.has(X.commandId),
							);
							W && K.push(W);
						}
						return K;
					}
					ib() {
						const F = [],
							x =
								this.S.activeEditorPane?.scopedContextKeyService ||
								this.Y.activeGroup.scopedContextKeyService,
							q = this.U.getMenuActions(h.$XX.CommandPalette, x)
								.reduce((V, [, G]) => [...V, ...G], [])
								.filter((V) => V instanceof h.$2X && V.enabled);
						for (const V of q) {
							let G =
								(typeof V.item.title == "string"
									? V.item.title
									: V.item.title.value) || V.item.id;
							const K =
								typeof V.item.category == "string"
									? V.item.category
									: V.item.category?.value;
							K && (G = (0, u.localize)(8689, null, K, G));
							const J =
									typeof V.item.title != "string"
										? V.item.title.original
										: void 0,
								W =
									K && V.item.category && typeof V.item.category != "string"
										? V.item.category.original
										: void 0,
								X = J && K ? (W ? `${W}: ${J}` : `${K}: ${J}`) : J,
								Y = V.item.metadata?.description,
								ie =
									Y === void 0 || (0, a.$gk)(Y) ? Y : { value: Y, original: Y };
							F.push({
								commandId: V.item.id,
								commandWhen: V.item.precondition?.serialize(),
								commandAlias: X,
								label: (0, E.$$k)(G),
								commandDescription: ie,
							});
						}
						return F;
					}
				};
				(e.$OMc = O),
					(e.$OMc =
						O =
						R =
							Ne(
								[
									j(0, D.$IY),
									j(1, h.$YX),
									j(2, M.$q2),
									j(3, p.$Li),
									j(4, o.$uZ),
									j(5, c.$ek),
									j(6, S.$km),
									j(7, g.$GO),
									j(8, n.$gj),
									j(9, L.$EY),
									j(10, A.$7Z),
									j(11, b.$Bk),
									j(12, k.$97),
									j(13, P.$c3),
								],
								O,
							));
				class B extends h.$3X {
					static {
						this.ID = "workbench.action.showCommands";
					}
					constructor() {
						super({
							id: B.ID,
							title: (0, u.localize2)(8693, "Show All Commands"),
							keybinding: {
								weight: f.KeybindingWeight.WorkbenchContrib,
								when: void 0,
								primary: t.$Ofb
									? void 0
									: C.KeyMod.CtrlCmd | C.KeyMod.Shift | C.KeyCode.KeyP,
								secondary: [C.KeyCode.F1],
							},
							f1: !0,
						});
					}
					async run(F) {
						F.get($.$DJ).quickAccess.show(O.PREFIX);
					}
				}
				e.$PMc = B;
				class U extends h.$3X {
					constructor() {
						super({
							id: "workbench.action.clearCommandHistory",
							title: (0, u.localize2)(8694, "Clear Command History"),
							f1: !0,
						});
					}
					async run(F) {
						const x = F.get(n.$gj),
							H = F.get(v.$lq),
							q = F.get(g.$GO);
						if (s.$Q0b.getConfiguredCommandHistoryLength(x) > 0) {
							const { confirmed: G } = await q.confirm({
								type: "warning",
								message: (0, u.localize)(8690, null),
								detail: (0, u.localize)(8691, null),
								primaryButton: (0, u.localize)(8692, null),
							});
							if (!G) return;
							s.$Q0b.clearHistory(x, H);
						}
					}
				}
				e.$QMc = U;
			},
		)
