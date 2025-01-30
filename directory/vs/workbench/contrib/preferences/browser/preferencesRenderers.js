import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/browser/dom.js';
import '../../../../base/common/actions.js';
import '../../../../base/common/async.js';
import '../../../../base/common/event.js';
import '../../../../base/common/lifecycle.js';
import '../../../../base/common/map.js';
import '../../../../base/common/resources.js';
import '../../../../base/common/themables.js';
import '../../../../editor/browser/editorBrowser.js';
import '../../../../editor/common/config/editorOptions.js';
import '../../../../editor/common/core/position.js';
import '../../../../editor/common/core/range.js';
import '../../../../editor/common/editorCommon.js';
import '../../../../editor/common/model.js';
import '../../../../editor/common/model/textModel.js';
import '../../../../editor/common/services/languageFeatures.js';
import '../../../../editor/contrib/codeAction/common/types.js';
import '../../../../nls.js';
import '../../../../platform/configuration/common/configuration.js';
import '../../../../platform/configuration/common/configurationRegistry.js';
import '../../../../platform/contextview/browser/contextView.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../platform/markers/common/markers.js';
import '../../../../platform/registry/common/platform.js';
import '../../../../platform/uriIdentity/common/uriIdentity.js';
import '../../../../platform/userDataProfile/common/userDataProfile.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../platform/workspace/common/workspaceTrust.js';
import '../../../browser/codeeditor.js';
import './preferencesIcons.js';
import './preferencesWidgets.js';
import '../../../services/configuration/common/configuration.js';
import '../../../services/environment/common/environmentService.js';
import '../../../services/preferences/common/preferences.js';
import '../../../services/preferences/common/preferencesModels.js';
import '../../../services/userDataProfile/common/userDataProfile.js';
define(
			de[3757],
			he([
				1, 0, 7, 50, 15, 6, 3, 59, 19, 26, 56, 38, 48, 17, 98, 64, 122, 69, 291,
				4, 10, 81, 49, 5, 90, 30, 68, 129, 25, 174, 824, 612, 1293, 261, 78,
				131, 838, 133,
			]),
			function (				ce /*require*/,
				e /*exports*/,
				t /*dom*/,
				i /*actions*/,
				w /*async*/,
				E /*event*/,
				C /*lifecycle*/,
				d /*map*/,
				m /*resources*/,
				r /*themables*/,
				u /*editorBrowser*/,
				a /*editorOptions*/,
				h /*position*/,
				c /*range*/,
				n /*editorCommon*/,
				g /*model*/,
				p /*textModel*/,
				o /*languageFeatures*/,
				f /*types*/,
				b /*nls*/,
				s /*configuration*/,
				l /*configurationRegistry*/,
				y /*contextView*/,
				$ /*instantiation*/,
				v /*markers*/,
				S /*platform*/,
				I /*uriIdentity*/,
				T /*userDataProfile*/,
				P /*workspace*/,
				k /*workspaceTrust*/,
				L /*codeeditor*/,
				D /*preferencesIcons*/,
				M /*preferencesWidgets*/,
				N /*configuration*/,
				A /*environmentService*/,
				R /*preferences*/,
				O /*preferencesModels*/,
				B /*userDataProfile*/,
) {
				"use strict";
				var U;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$rCc = e.$qCc = void 0),
					(n = mt(n)),
					(b = mt(b));
				let z = class extends C.$1c {
					constructor(K, J, W, X, Y) {
						super(),
							(this.h = K),
							(this.preferencesModel = J),
							(this.j = W),
							(this.m = X),
							(this.n = Y),
							(this.c = new w.$Jh(200)),
							(this.a = this.D(Y.createInstance(H, K))),
							(this.b = this.D(
								this.n.createInstance(x, this.h, this.preferencesModel, this.a),
							)),
							this.D(
								this.b.onUpdateSetting(({ key: ie, value: ne, source: ee }) =>
									this.updatePreference(ie, ne, ee),
								),
							),
							this.D(
								this.h
									.getModel()
									.onDidChangeContent(() => this.c.trigger(() => this.q())),
							),
							(this.g = this.D(Y.createInstance(q, K, J)));
					}
					render() {
						this.b.render(this.preferencesModel.settingsGroups, this.f),
							this.g.render();
					}
					updatePreference(K, J, W) {
						const X = W.overrideOf ? (0, l.$Yo)(W.overrideOf.key) : null,
							Y = this.preferencesModel.uri;
						this.m
							.updateValue(
								K,
								J,
								{ overrideIdentifiers: X, resource: Y },
								this.preferencesModel.configurationTarget,
							)
							.then(() => this.r(W));
					}
					q() {
						this.h.hasModel() && this.render();
					}
					r(K) {
						this.h.focus(),
							(K = this.t(K)),
							K && (this.h.setSelection(K.valueRange), this.a.highlight(K, !0));
					}
					t(K) {
						const { key: J, overrideOf: W } = K;
						if (W) {
							const X = this.t(W);
							for (const Y of X.overrides) if (Y.key === J) return Y;
							return;
						}
						return this.preferencesModel.getPreference(J);
					}
					focusPreference(K) {
						const J = this.t(K);
						J
							? (this.a.highlight(J, !0),
								this.h.setPosition({
									lineNumber: J.keyRange.startLineNumber,
									column: J.keyRange.startColumn,
								}))
							: this.a.clear(!0);
					}
					clearFocus(K) {
						this.a.clear(!0);
					}
					editPreference(K) {
						const J = this.t(K);
						return !!(J && this.b.activateOnSetting(J));
					}
				};
				(e.$qCc = z),
					(e.$qCc = z = Ne([j(2, R.$7Z), j(3, s.$gj), j(4, $.$Li)], z));
				let F = class extends z {
					constructor(K, J, W, X, Y) {
						super(K, J, W, X, Y), (this.u = this.D(Y.createInstance(V, K, J)));
					}
					render() {
						super.render(), this.u.render();
					}
				};
				(e.$rCc = F),
					(e.$rCc = F = Ne([j(2, R.$7Z), j(3, s.$gj), j(4, $.$Li)], F));
				let x = class extends C.$1c {
					constructor(K, J, W, X, Y, ie) {
						super(),
							(this.h = K),
							(this.j = J),
							(this.m = W),
							(this.n = X),
							(this.q = Y),
							(this.r = ie),
							(this.c = []),
							(this.g = new E.$re()),
							(this.onUpdateSetting = this.g.event),
							(this.a = this.D(this.q.createInstance(M.$dBc, K))),
							(this.b = this.D(this.q.createInstance(M.$dBc, K))),
							(this.f = new w.$Jh(75)),
							this.D(this.a.onClick((ne) => this.M(this.a, ne))),
							this.D(this.b.onClick((ne) => this.M(this.b, ne))),
							this.D(this.h.onDidChangeCursorPosition((ne) => this.w(ne))),
							this.D(this.h.onMouseMove((ne) => this.z(ne))),
							this.D(this.h.onDidChangeConfiguration(() => this.u()));
					}
					render(K, J) {
						this.a.hide(),
							this.b.hide(),
							(this.c = K),
							(this.associatedPreferencesModel = J);
						const W = this.I(this.h.getPosition().lineNumber);
						W.length && this.G(this.a, W);
					}
					t() {
						return this.j instanceof O.$2Z;
					}
					u() {
						this.h.getOption(a.EditorOption.glyphMargin) ||
							(this.a.hide(), this.b.hide());
					}
					w(K) {
						this.b.hide();
						const J = this.I(K.position.lineNumber);
						J.length ? this.G(this.a, J) : this.a.hide();
					}
					z(K) {
						const J = this.C(K);
						if (J) {
							this.L(J);
							return;
						}
						this.m.clear(), this.f.trigger(() => this.F(K));
					}
					C(K) {
						if (K.target.type === u.MouseTargetType.GUTTER_GLYPH_MARGIN) {
							const J = K.target.position.lineNumber;
							if (this.b.getLine() === J && this.b.isVisible()) return this.b;
							if (this.a.getLine() === J && this.a.isVisible()) return this.a;
						}
					}
					F(K) {
						const J = K.target.position
							? this.I(K.target.position.lineNumber)
							: null;
						J && J.length ? this.G(this.b, J) : this.b.hide();
					}
					G(K, J) {
						const W = J[0].valueRange.startLineNumber;
						this.h.getOption(a.EditorOption.glyphMargin) &&
							this.H(W) &&
							(K.show(W, b.localize(8450, null), J),
							(K === this.a ? this.b : this.a).hide());
					}
					H(K) {
						const J = this.h.getLineDecorations(K);
						if (J) {
							for (const { options: W } of J)
								if (
									W.glyphMarginClassName &&
									W.glyphMarginClassName.indexOf(
										r.ThemeIcon.asClassName(D.$7Ac),
									) === -1
								)
									return !1;
						}
						return !0;
					}
					I(K) {
						const J = this.O();
						return this.J(K).filter((W) => {
							const X = J[W.key];
							if (X) {
								if (X.policy && this.n.inspect(W.key).policyValue !== void 0)
									return !1;
								if (this.t()) return W.key !== "launch";
								if (
									(X.type === "boolean" || X.enum) &&
									(this.j.configurationTarget !==
										s.ConfigurationTarget.WORKSPACE_FOLDER ||
										X.scope === l.ConfigurationScope.RESOURCE ||
										X.scope === l.ConfigurationScope.LANGUAGE_OVERRIDABLE)
								)
									return !0;
							}
							return !1;
						});
					}
					J(K) {
						let J = 0;
						const W = [];
						for (const X of this.c) {
							if (X.range.startLineNumber > K) break;
							if (K >= X.range.startLineNumber && K <= X.range.endLineNumber)
								for (const Y of X.sections)
									for (const ie of Y.settings) {
										if (ie.range.startLineNumber > K) break;
										if (
											K >= ie.range.startLineNumber &&
											K <= ie.range.endLineNumber
										)
											if (!this.t() && ie.overrides.length)
												for (const ne of ie.overrides)
													K >= ne.range.startLineNumber &&
														K <= ne.range.endLineNumber &&
														W.push({ ...ne, index: J, groupId: X.id });
											else W.push({ ...ie, index: J, groupId: X.id });
										J++;
									}
						}
						return W;
					}
					L(K) {
						this.m.highlight(K.preferences[0]);
					}
					M(K, J) {
						t.$ahb.stop(J.event, !0);
						const W =
							this.I(K.getLine()).length === 1
								? this.P(K.preferences[0], this.O()[K.preferences[0].key])
								: K.preferences.map(
										(X) =>
											new i.$uj(
												`preferences.submenu.${X.key}`,
												X.key,
												this.P(X, this.O()[X.key]),
											),
									);
						this.r.showContextMenu({
							getAnchor: () => J.event,
							getActions: () => W,
						});
					}
					activateOnSetting(K) {
						const J = K.keyRange.startLineNumber,
							W = this.I(J);
						if (!W.length) return !1;
						this.b.show(J, "", W);
						const X = this.P(
							this.b.preferences[0],
							this.O()[this.b.preferences[0].key],
						);
						return (
							this.r.showContextMenu({
								getAnchor: () => this.N(new h.$hL(J, 1)),
								getActions: () => X,
							}),
							!0
						);
					}
					N(K) {
						const J = this.h.getScrolledVisiblePosition(K),
							W = (0, t.$tgb)(this.h.getDomNode()),
							X = W.left + J.left,
							Y = W.top + J.top + J.height;
						return { x: X, y: Y + 10 };
					}
					O() {
						return S.$Io.as(l.$No.Configuration).getConfigurationProperties();
					}
					P(K, J) {
						return J.type === "boolean"
							? [
									{
										id: "truthyValue",
										label: "true",
										tooltip: "true",
										enabled: !0,
										run: () => this.R(K.key, !0, K),
										class: void 0,
									},
									{
										id: "falsyValue",
										label: "false",
										tooltip: "false",
										enabled: !0,
										run: () => this.R(K.key, !1, K),
										class: void 0,
									},
								]
							: J.enum
								? J.enum.map((W) => ({
										id: W,
										label: JSON.stringify(W),
										tooltip: JSON.stringify(W),
										enabled: !0,
										run: () => this.R(K.key, W, K),
										class: void 0,
									}))
								: this.Q(K);
					}
					Q(K) {
						if (this.t()) {
							const J = this.associatedPreferencesModel.getPreference(K.key);
							return [
								{
									id: "setDefaultValue",
									label: J ? b.localize(8451, null) : b.localize(8452, null),
									tooltip: J ? b.localize(8453, null) : b.localize(8454, null),
									enabled: !0,
									run: () => this.R(K.key, K.value, K),
									class: void 0,
								},
							];
						}
						return [];
					}
					R(K, J, W) {
						this.g.fire({ key: K, value: J, source: W });
					}
				};
				x = Ne([j(3, s.$gj), j(4, $.$Li), j(5, y.$Xxb)], x);
				let H = class extends C.$1c {
					constructor(K, J) {
						super(),
							(this.c = K),
							(this.a = this.D(J.createInstance(L.$u4b))),
							(this.b = this.D(J.createInstance(L.$u4b)));
					}
					highlight(K, J = !1) {
						this.b.removeHighlightRange(),
							this.a.removeHighlightRange(),
							(J ? this.a : this.b).highlightRange(
								{ range: K.valueRange, resource: this.c.getModel().uri },
								this.c,
							),
							this.c.revealLineInCenterIfOutsideViewport(
								K.valueRange.startLineNumber,
								n.ScrollType.Smooth,
							);
					}
					clear(K = !1) {
						this.b.removeHighlightRange(), K && this.a.removeHighlightRange();
					}
				};
				H = Ne([j(1, $.$Li)], H);
				let q = class extends C.$1c {
					constructor(K, J, W, X, Y, ie, ne, ee, _, te) {
						super(),
							(this.c = K),
							(this.f = J),
							(this.g = W),
							(this.h = X),
							(this.j = Y),
							(this.m = ie),
							(this.n = ne),
							(this.q = _),
							(this.r = te),
							(this.a = new w.$Jh(200)),
							(this.b = new d.$Gc((Q) => this.n.extUri.getComparisonKey(Q))),
							this.D(this.c.getModel().onDidChangeContent(() => this.t())),
							this.D(
								E.Event.filter(
									this.j.onDidChangeConfiguration,
									(Q) => Q.source === s.ConfigurationTarget.DEFAULT,
								)(() => this.t()),
							),
							this.D(
								ee.codeActionProvider.register({ pattern: J.uri.path }, this),
							),
							this.D(_.onDidChangeCurrentProfile(() => this.t()));
					}
					t() {
						this.a.trigger(() => this.render());
					}
					render() {
						this.b.clear();
						const K = this.u();
						K.length
							? this.g.changeOne("UnsupportedSettingsRenderer", this.f.uri, K)
							: this.g.remove("UnsupportedSettingsRenderer", [this.f.uri]);
					}
					async provideCodeActions(K, J, W, X) {
						const Y = [],
							ie = this.b.get(K.uri);
						if (ie)
							for (const [ne, ee] of ie) ne.containsRange(J) && Y.push(...ee);
						return { actions: Y, dispose: () => {} };
					}
					u() {
						const K = [],
							J = S.$Io.as(l.$No.Configuration).getConfigurationProperties();
						for (const W of this.f.settingsGroups)
							for (const X of W.sections)
								for (const Y of X.settings) {
									if (l.$Xo.test(Y.key)) {
										Y.overrides && this.z(Y.overrides, J, K);
										continue;
									}
									const ie = J[Y.key];
									if (ie) {
										if (this.w(Y, ie, K)) continue;
										switch (this.f.configurationTarget) {
											case s.ConfigurationTarget.USER_LOCAL:
												this.C(Y, ie, K);
												break;
											case s.ConfigurationTarget.USER_REMOTE:
												this.F(Y, ie, K);
												break;
											case s.ConfigurationTarget.WORKSPACE:
												this.G(Y, ie, K);
												break;
											case s.ConfigurationTarget.WORKSPACE_FOLDER:
												this.H(Y, ie, K);
												break;
										}
									} else K.push(this.M(Y));
								}
						return K;
					}
					w(K, J, W) {
						return !J.policy ||
							this.j.inspect(K.key).policyValue === void 0 ||
							this.f.configurationTarget === s.ConfigurationTarget.DEFAULT
							? !1
							: (W.push({
									severity: v.MarkerSeverity.Hint,
									tags: [v.MarkerTag.Unnecessary],
									...K.range,
									message: b.localize(8455, null),
								}),
								!0);
					}
					z(K, J, W) {
						for (const X of K || []) {
							const Y = J[X.key];
							Y
								? Y.scope !== l.ConfigurationScope.LANGUAGE_OVERRIDABLE &&
									W.push({
										severity: v.MarkerSeverity.Hint,
										tags: [v.MarkerTag.Unnecessary],
										...X.range,
										message: b.localize(8456, null),
									})
								: W.push(this.M(X));
						}
					}
					C(K, J, W) {
						!this.q.currentProfile.isDefault &&
							!this.q.currentProfile.useDefaultFlags?.settings &&
							((0, m.$gh)(this.r.defaultProfile.settingsResource, this.f.uri) &&
							!this.j.isSettingAppliedForAllProfiles(K.key)
								? W.push({
										severity: v.MarkerSeverity.Hint,
										tags: [v.MarkerTag.Unnecessary],
										...K.range,
										message: b.localize(8457, null),
									})
								: (0, m.$gh)(
										this.q.currentProfile.settingsResource,
										this.f.uri,
									) &&
									(J.scope === l.ConfigurationScope.APPLICATION
										? W.push(this.I(K))
										: this.j.isSettingAppliedForAllProfiles(K.key) &&
											W.push({
												severity: v.MarkerSeverity.Hint,
												tags: [v.MarkerTag.Unnecessary],
												...K.range,
												message: b.localize(8458, null, N.$TZ),
											}))),
							this.h.remoteAuthority &&
								(J.scope === l.ConfigurationScope.MACHINE ||
									J.scope === l.ConfigurationScope.MACHINE_OVERRIDABLE) &&
								W.push({
									severity: v.MarkerSeverity.Hint,
									tags: [v.MarkerTag.Unnecessary],
									...K.range,
									message: b.localize(8459, null),
								});
					}
					F(K, J, W) {
						J.scope === l.ConfigurationScope.APPLICATION && W.push(this.I(K));
					}
					G(K, J, W) {
						if (
							(J.scope === l.ConfigurationScope.APPLICATION &&
								W.push(this.I(K)),
							J.scope === l.ConfigurationScope.MACHINE && W.push(this.J(K)),
							!this.m.isWorkspaceTrusted() && J.restricted)
						) {
							const X = this.L(K);
							W.push(X);
							const Y = this.N([X]);
							this.O(X, Y);
						}
					}
					H(K, J, W) {
						if (
							(J.scope === l.ConfigurationScope.APPLICATION &&
								W.push(this.I(K)),
							J.scope === l.ConfigurationScope.MACHINE && W.push(this.J(K)),
							J.scope === l.ConfigurationScope.WINDOW &&
								W.push({
									severity: v.MarkerSeverity.Hint,
									tags: [v.MarkerTag.Unnecessary],
									...K.range,
									message: b.localize(8460, null),
								}),
							!this.m.isWorkspaceTrusted() && J.restricted)
						) {
							const X = this.L(K);
							W.push(X);
							const Y = this.N([X]);
							this.O(X, Y);
						}
					}
					I(K) {
						return {
							severity: v.MarkerSeverity.Hint,
							tags: [v.MarkerTag.Unnecessary],
							...K.range,
							message: b.localize(8461, null),
						};
					}
					J(K) {
						return {
							severity: v.MarkerSeverity.Hint,
							tags: [v.MarkerTag.Unnecessary],
							...K.range,
							message: b.localize(8462, null),
						};
					}
					L(K) {
						return {
							severity: v.MarkerSeverity.Warning,
							...K.range,
							message: b.localize(8463, null),
						};
					}
					M(K) {
						return {
							severity: v.MarkerSeverity.Hint,
							tags: [v.MarkerTag.Unnecessary],
							...K.range,
							message: b.localize(8464, null),
						};
					}
					N(K) {
						return [
							{
								title: b.localize(8465, null),
								command: {
									id: "workbench.trust.manage",
									title: b.localize(8466, null),
								},
								diagnostics: K,
								kind: f.$GAb.QuickFix.value,
							},
						];
					}
					O(K, J) {
						let W = this.b.get(this.f.uri);
						W || ((W = []), this.b.set(this.f.uri, W)),
							W.push([c.$iL.lift(K), J]);
					}
					dispose() {
						this.g.remove("UnsupportedSettingsRenderer", [this.f.uri]),
							this.b.clear(),
							super.dispose();
					}
				};
				q = Ne(
					[
						j(2, v.$aM),
						j(3, A.$r8),
						j(4, N.$RZ),
						j(5, k.$pO),
						j(6, I.$Vl),
						j(7, o.$k3),
						j(8, B.$P8),
						j(9, T.$Xl),
					],
					q,
				);
				let V = class extends C.$1c {
					static {
						U = this;
					}
					static {
						this.a = [
							"folders",
							"tasks",
							"launch",
							"extensions",
							"settings",
							"remoteAuthority",
							"transient",
						];
					}
					constructor(K, J, W, X) {
						super(),
							(this.f = K),
							(this.g = J),
							(this.h = W),
							(this.j = X),
							(this.b = this.f.createDecorationsCollection()),
							(this.c = new w.$Jh(200)),
							this.D(
								this.f
									.getModel()
									.onDidChangeContent(() =>
										this.c.trigger(() => this.render()),
									),
							);
					}
					render() {
						const K = [];
						if (
							this.h.getWorkbenchState() === P.WorkbenchState.WORKSPACE &&
							this.g instanceof O.$ZZ
						) {
							const J = [];
							for (const W of this.g.configurationGroups)
								for (const X of W.sections)
									for (const Y of X.settings)
										U.a.includes(Y.key) ||
											K.push({
												severity: v.MarkerSeverity.Hint,
												tags: [v.MarkerTag.Unnecessary],
												...Y.range,
												message: b.localize(8467, null),
											});
							this.b.set(J.map((W) => this.n(W)));
						}
						K.length
							? this.j.changeOne(
									"WorkspaceConfigurationRenderer",
									this.g.uri,
									K,
								)
							: this.j.remove("WorkspaceConfigurationRenderer", [this.g.uri]);
					}
					static {
						this.m = p.$eY.register({
							description: "dim-configuration",
							stickiness: g.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
							inlineClassName: "dim-configuration",
						});
					}
					n(K) {
						return { range: K, options: U.m };
					}
					dispose() {
						this.j.remove("WorkspaceConfigurationRenderer", [this.g.uri]),
							this.b.clear(),
							super.dispose();
					}
				};
				V = U = Ne([j(2, P.$Vi), j(3, v.$aM)], V);
			},
		),
		