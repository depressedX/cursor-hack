import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/ui/toggle/toggle.js';
import '../../../../base/common/platform.js';
import '../../../../editor/common/services/model.js';
import '../../../../editor/common/services/resolverService.js';
import '../../../../nls.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/quickinput/common/quickInput.js';
import '../../../../platform/terminal/common/capabilities/capabilities.js';
import '../../../../platform/terminal/common/terminalEnvironment.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../base/common/themables.js';
import './terminalIcons.js';
import '../common/history.js';
import '../common/terminalStorageKeys.js';
import '../common/terminalStrings.js';
import '../../../../base/common/uri.js';
import '../../../../base/common/date.js';
import '../../../services/editor/common/editorService.js';
import '../../../../platform/quickinput/browser/quickPickPin.js';
import '../../../../platform/storage/common/storage.js';
import '../../../../platform/accessibility/browser/accessibleView.js';
import '../../../../base/common/lifecycle.js';
define(
			de[3567],
			he([
				1, 0, 268, 12, 67, 42, 4, 5, 63, 189, 775, 51, 26, 689, 1314, 691, 469,
				9, 275, 18, 1678, 21, 178, 3,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*toggle*/,
				i /*platform*/,
				w /*model*/,
				E /*resolverService*/,
				C /*nls*/,
				d /*instantiation*/,
				m /*quickInput*/,
				r /*capabilities*/,
				u /*terminalEnvironment*/,
				a /*colorRegistry*/,
				h /*themables*/,
				c /*terminalIcons*/,
				n /*history*/,
				g /*terminalStorageKeys*/,
				p /*terminalStrings*/,
				o /*uri*/,
				f /*date*/,
				b /*editorService*/,
				s /*quickPickPin*/,
				l /*storage*/,
				y /*accessibleView*/,
				$ /*lifecycle*/,
) {
				"use strict";
				var v;
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$8Uc = S);
				async function S(T, P, k, L, D, M) {
					if (!P.xterm) return;
					const N = T.get(b.$IY),
						A = T.get(d.$Li),
						R = T.get(m.$DJ),
						O = T.get(l.$lq),
						B = T.get(y.$HLb),
						U = `${g.TerminalStorageKeys.PinnedRecentCommandsPrefix}.${P.shellType}`;
					let z,
						F = [];
					const x = new Set(),
						H = {
							iconClass: h.ThemeIcon.asClassName(c.$5Hb),
							tooltip: (0, C.localize)(10142, null),
						},
						q = {
							iconClass: h.ThemeIcon.asClassName(c.$6Hb),
							tooltip: (0, C.localize)(10143, null),
							alwaysVisible: !1,
						};
					if (L === "command") {
						let _ = function (re) {
							return re
								.replace(/\r?\n/g, "\u23CE")
								.replace(/\s\s\s+/g, "\u22EF");
						};
						z = i.$m
							? (0, C.localize)(10144, null)
							: (0, C.localize)(10145, null);
						const ie = P.capabilities.get(
								r.TerminalCapability.CommandDetection,
							),
							ne = ie?.commands,
							ee = ie?.executingCommand;
						if ((ee && x.add(ee), ne && ne.length > 0)) {
							for (const re of ne) {
								const le = re.command.trim();
								if (le.length === 0 || x.has(le)) continue;
								let oe = (0, u.$Ceb)(
									re.cwd,
									P.userHome,
									P.os === i.OperatingSystem.Windows ? "\\" : "/",
								);
								re.exitCode &&
									(re.exitCode === -1
										? (oe += " failed")
										: (oe += ` exitCode: ${re.exitCode}`)),
									(oe = oe.trim());
								const ae = [q],
									pe = F.length > 0 ? F[F.length - 1] : void 0;
								if (pe?.type !== "separator" && pe?.label === le) {
									(pe.id = re.timestamp.toString()), (pe.description = oe);
									continue;
								}
								F.push({
									label: _(le),
									rawLabel: le,
									description: oe,
									id: re.timestamp.toString(),
									command: re,
									buttons: re.hasOutput() ? ae : void 0,
								}),
									x.add(le);
							}
							F = F.reverse();
						}
						ee &&
							F.unshift({ label: _(ee), rawLabel: ee, description: ie.cwd }),
							F.length > 0 &&
								F.unshift({
									type: "separator",
									label: p.$hUc.currentSessionCategory,
								});
						const te = A.invokeFunction(n.$kUc),
							Q = [];
						for (const [re, le] of te.entries)
							!x.has(re) &&
								le.shellType === P.shellType &&
								(Q.unshift({ label: _(re), rawLabel: re, buttons: [H] }),
								x.add(re));
						Q.length > 0 &&
							F.push(
								{ type: "separator", label: p.$hUc.previousSessionCategory },
								...Q,
							);
						const Z = await A.invokeFunction(n.$mUc, P.shellType),
							se = [];
						for (const re of Z)
							x.has(re) || se.unshift({ label: _(re), rawLabel: re });
						se.length > 0 &&
							F.push(
								{
									type: "separator",
									label: (0, C.localize)(10146, null, P.shellType),
								},
								...se,
							);
					} else {
						z = i.$m
							? (0, C.localize)(10147, null)
							: (0, C.localize)(10148, null);
						const ie =
							P.capabilities.get(r.TerminalCapability.CwdDetection)?.cwds || [];
						if (ie && ie.length > 0) {
							for (const _ of ie) F.push({ label: _, rawLabel: _ });
							(F = F.reverse()),
								F.unshift({
									type: "separator",
									label: p.$hUc.currentSessionCategory,
								});
						}
						const ne = A.invokeFunction(n.$lUc),
							ee = [];
						for (const [_, te] of ne.entries)
							(te === null || te.remoteAuthority === P.remoteAuthority) &&
								!ie.includes(_) &&
								ee.unshift({ label: _, rawLabel: _, buttons: [H] });
						ee.length > 0 &&
							F.push(
								{ type: "separator", label: p.$hUc.previousSessionCategory },
								...ee,
							);
					}
					if (F.length === 0) return;
					const V = new $.$Zc(),
						G = V.add(
							new t.$8ib({
								title: "Fuzzy search",
								icon: c.$7Hb,
								isChecked: D === "fuzzy",
								inputActiveOptionBorder: (0, a.$rP)(a.$WR),
								inputActiveOptionForeground: (0, a.$rP)(a.$ZR),
								inputActiveOptionBackground: (0, a.$rP)(a.$YR),
							}),
						);
					V.add(
						G.onChange(() => {
							A.invokeFunction(
								S,
								P,
								k,
								L,
								G.checked ? "fuzzy" : "contiguous",
								J.value,
							);
						}),
					);
					const K = V.add(A.createInstance(I)),
						J = V.add(R.createQuickPick({ useSeparators: !0 })),
						W = F;
					(J.items = [...W]),
						(J.sortByLabel = !1),
						(J.placeholder = z),
						(J.matchOnLabelMode = D || "contiguous"),
						(J.toggles = [G]),
						V.add(
							J.onDidTriggerItemButton(async (ie) => {
								if (ie.button === H)
									L === "command"
										? A.invokeFunction(n.$kUc)?.remove(ie.item.label)
										: A.invokeFunction(n.$lUc)?.remove(ie.item.label);
								else if (ie.button === q) {
									const ne = ie.item.command,
										ee = ne?.getOutput();
									if (ee && ne?.command) {
										const _ = await K.provideTextContent(
											o.URI.from({
												scheme: I.scheme,
												path: `${ne.command}... ${(0, f.$dn)(ne.timestamp, !0)}`,
												fragment: ee,
												query: `terminal-output-${ne.timestamp}-${P.instanceId}`,
											}),
										);
										_ && (await N.openEditor({ resource: _.uri }));
									}
								}
								await A.invokeFunction(S, P, k, L, D, M);
							}),
						),
						V.add(
							J.onDidChangeValue(async (ie) => {
								ie || (await A.invokeFunction(S, P, k, L, D, ie));
							}),
						);
					let X = !1;
					function Y() {
						(X = !1),
							P.xterm?.markTracker.restoreScrollState(),
							P.xterm?.markTracker.clear();
					}
					return (
						V.add(
							J.onDidChangeActive(async () => {
								const ie = P.xterm;
								if (!ie) return;
								const [ne] = J.activeItems;
								if (ne)
									if ("command" in ne && ne.command && ne.command.marker) {
										X || (ie.markTracker.saveScrollState(), (X = !0));
										const ee = ne.command.getPromptRowCount(),
											_ = ne.command.getCommandRowCount();
										ie.markTracker.revealRange({
											start: { x: 1, y: ne.command.marker.line - (ee - 1) + 1 },
											end: {
												x: P.cols,
												y: ne.command.marker.line + (_ - 1) + 1,
											},
										});
									} else Y();
							}),
						),
						V.add(
							J.onDidAccept(async () => {
								const ie = J.activeItems[0];
								let ne;
								L === "cwd"
									? (ne = `cd ${await P.preparePathForShell(ie.rawLabel)}`)
									: (ne = ie.rawLabel),
									J.hide(),
									P.runCommand(ne, !J.keyMods.alt),
									J.keyMods.alt && P.focus(),
									Y();
							}),
						),
						V.add(J.onDidHide(() => Y())),
						M && (J.value = M),
						new Promise((ie) => {
							k.set(!0),
								V.add((0, s.$7Uc)(O, U, J, !0)),
								V.add(
									J.onDidHide(() => {
										k.set(!1),
											B.showLastProvider(y.AccessibleViewProviderId.Terminal),
											ie(),
											V.dispose();
									}),
								);
						})
					);
				}
				let I = class extends $.$1c {
					static {
						v = this;
					}
					static {
						this.scheme = "TERMINAL_OUTPUT";
					}
					constructor(P, k) {
						super(),
							(this.a = k),
							this.D(P.registerTextModelContentProvider(v.scheme, this));
					}
					async provideTextContent(P) {
						const k = this.a.getModel(P);
						return k && !k.isDisposed()
							? k
							: this.a.createModel(P.fragment, null, P, !1);
					}
				};
				I = v = Ne([j(0, E.$MO), j(1, w.$QO)], I);
			},
		),
		