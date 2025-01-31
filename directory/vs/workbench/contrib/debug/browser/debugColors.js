import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/theme/common/colorRegistry.js';
import '../../../../platform/theme/common/themeService.js';
import '../../../../base/common/themables.js';
import '../../../../base/common/color.js';
import '../../../../nls.js';
import './debugIcons.js';
import '../../../../platform/theme/common/theme.js';
define(
			de[984],
			he([1, 0, 51, 35, 26, 97, 4, 352, 212]),
			function (ce /*require*/,
 e /*exports*/,
 t /*colorRegistry*/,
 i /*themeService*/,
 w /*themables*/,
 E /*color*/,
 C /*nls*/,
 d /*debugIcons*/,
 m /*theme*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$NKb = e.$MKb = e.$LKb = void 0),
					(e.$OKb = r),
					(d = mt(d)),
					(e.$LKb = (0, t.$wP)(
						"debugToolBar.background",
						{
							dark: "#333333",
							light: "#F3F3F3",
							hcDark: "#000000",
							hcLight: "#FFFFFF",
						},
						(0, C.localize)(5417, null),
					)),
					(e.$MKb = (0, t.$wP)(
						"debugToolBar.border",
						null,
						(0, C.localize)(5418, null),
					)),
					(e.$NKb = (0, t.$wP)(
						"debugIcon.startForeground",
						{
							dark: "#89D185",
							light: "#388A34",
							hcDark: "#89D185",
							hcLight: "#388A34",
						},
						(0, C.localize)(5419, null),
					));
				function r() {
					const u = (0, t.$wP)(
							"debugTokenExpression.name",
							{
								dark: "#c586c0",
								light: "#9b46b0",
								hcDark: t.$IP,
								hcLight: t.$IP,
							},
							"Foreground color for the token names shown in the debug views (ie. the Variables or Watch view).",
						),
						a = (0, t.$wP)(
							"debugTokenExpression.type",
							{
								dark: "#4A90E2",
								light: "#4A90E2",
								hcDark: t.$IP,
								hcLight: t.$IP,
							},
							"Foreground color for the token types shown in the debug views (ie. the Variables or Watch view).",
						),
						h = (0, t.$wP)(
							"debugTokenExpression.value",
							{
								dark: "#cccccc99",
								light: "#6c6c6ccc",
								hcDark: t.$IP,
								hcLight: t.$IP,
							},
							"Foreground color for the token values shown in the debug views (ie. the Variables or Watch view).",
						),
						c = (0, t.$wP)(
							"debugTokenExpression.string",
							{
								dark: "#ce9178",
								light: "#a31515",
								hcDark: "#f48771",
								hcLight: "#a31515",
							},
							"Foreground color for strings in the debug views (ie. the Variables or Watch view).",
						),
						n = (0, t.$wP)(
							"debugTokenExpression.boolean",
							{
								dark: "#4e94ce",
								light: "#0000ff",
								hcDark: "#75bdfe",
								hcLight: "#0000ff",
							},
							"Foreground color for booleans in the debug views (ie. the Variables or Watch view).",
						),
						g = (0, t.$wP)(
							"debugTokenExpression.number",
							{
								dark: "#b5cea8",
								light: "#098658",
								hcDark: "#89d185",
								hcLight: "#098658",
							},
							"Foreground color for numbers in the debug views (ie. the Variables or Watch view).",
						),
						p = (0, t.$wP)(
							"debugTokenExpression.error",
							{
								dark: "#f48771",
								light: "#e51400",
								hcDark: "#f48771",
								hcLight: "#e51400",
							},
							"Foreground color for expression errors in the debug views (ie. the Variables or Watch view) and for error logs shown in the debug console.",
						),
						o = (0, t.$wP)(
							"debugView.exceptionLabelForeground",
							{ dark: t.$IP, light: "#FFF", hcDark: t.$IP, hcLight: t.$IP },
							"Foreground color for a label shown in the CALL STACK view when the debugger breaks on an exception.",
						),
						f = (0, t.$wP)(
							"debugView.exceptionLabelBackground",
							{
								dark: "#6C2022",
								light: "#A31515",
								hcDark: "#6C2022",
								hcLight: "#A31515",
							},
							"Background color for a label shown in the CALL STACK view when the debugger breaks on an exception.",
						),
						b = (0, t.$wP)(
							"debugView.stateLabelForeground",
							t.$IP,
							"Foreground color for a label in the CALL STACK view showing the current session's or thread's state.",
						),
						s = (0, t.$wP)(
							"debugView.stateLabelBackground",
							"#88888844",
							"Background color for a label in the CALL STACK view showing the current session's or thread's state.",
						),
						l = (0, t.$wP)(
							"debugView.valueChangedHighlight",
							"#569CD6",
							"Color used to highlight value changes in the debug views (ie. in the Variables view).",
						),
						y = (0, t.$wP)(
							"debugConsole.infoForeground",
							{ dark: t.$mQ, light: t.$mQ, hcDark: t.$IP, hcLight: t.$IP },
							"Foreground color for info messages in debug REPL console.",
						),
						$ = (0, t.$wP)(
							"debugConsole.warningForeground",
							{ dark: t.$jQ, light: t.$jQ, hcDark: "#008000", hcLight: t.$jQ },
							"Foreground color for warning messages in debug REPL console.",
						),
						v = (0, t.$wP)(
							"debugConsole.errorForeground",
							t.$KP,
							"Foreground color for error messages in debug REPL console.",
						),
						S = (0, t.$wP)(
							"debugConsole.sourceForeground",
							t.$IP,
							"Foreground color for source filenames in debug REPL console.",
						),
						I = (0, t.$wP)(
							"debugConsoleInputIcon.foreground",
							t.$IP,
							"Foreground color for debug console input marker icon.",
						),
						T = (0, t.$wP)(
							"debugIcon.pauseForeground",
							{
								dark: "#75BEFF",
								light: "#007ACC",
								hcDark: "#75BEFF",
								hcLight: "#007ACC",
							},
							(0, C.localize)(5420, null),
						),
						P = (0, t.$wP)(
							"debugIcon.stopForeground",
							{
								dark: "#F48771",
								light: "#A1260D",
								hcDark: "#F48771",
								hcLight: "#A1260D",
							},
							(0, C.localize)(5421, null),
						),
						k = (0, t.$wP)(
							"debugIcon.disconnectForeground",
							{
								dark: "#F48771",
								light: "#A1260D",
								hcDark: "#F48771",
								hcLight: "#A1260D",
							},
							(0, C.localize)(5422, null),
						),
						L = (0, t.$wP)(
							"debugIcon.restartForeground",
							{
								dark: "#89D185",
								light: "#388A34",
								hcDark: "#89D185",
								hcLight: "#388A34",
							},
							(0, C.localize)(5423, null),
						),
						D = (0, t.$wP)(
							"debugIcon.stepOverForeground",
							{
								dark: "#75BEFF",
								light: "#007ACC",
								hcDark: "#75BEFF",
								hcLight: "#007ACC",
							},
							(0, C.localize)(5424, null),
						),
						M = (0, t.$wP)(
							"debugIcon.stepIntoForeground",
							{
								dark: "#75BEFF",
								light: "#007ACC",
								hcDark: "#75BEFF",
								hcLight: "#007ACC",
							},
							(0, C.localize)(5425, null),
						),
						N = (0, t.$wP)(
							"debugIcon.stepOutForeground",
							{
								dark: "#75BEFF",
								light: "#007ACC",
								hcDark: "#75BEFF",
								hcLight: "#007ACC",
							},
							(0, C.localize)(5426, null),
						),
						A = (0, t.$wP)(
							"debugIcon.continueForeground",
							{
								dark: "#75BEFF",
								light: "#007ACC",
								hcDark: "#75BEFF",
								hcLight: "#007ACC",
							},
							(0, C.localize)(5427, null),
						),
						R = (0, t.$wP)(
							"debugIcon.stepBackForeground",
							{
								dark: "#75BEFF",
								light: "#007ACC",
								hcDark: "#75BEFF",
								hcLight: "#007ACC",
							},
							(0, C.localize)(5428, null),
						);
					(0, i.$oP)((O, B) => {
						const U = O.getColor(t.$1P),
							z = O.getColor(t.$2P),
							F = O.getColor(t.$2S),
							x = O.getColor(o),
							H = O.getColor(f),
							q = O.getColor(b),
							V = O.getColor(s),
							G = O.getColor(l),
							K = O.getColor(t.$dR);
						B.addRule(`
			/* Text colour of the call stack row's filename */
			.debug-pane .debug-call-stack .monaco-list-row:not(.selected) .stack-frame > .file .file-name {
				color: ${F}
			}

			/* Line & column number "badge" for selected call stack row */
			.debug-pane .monaco-list-row.selected .line-number {
				background-color: ${U};
				color: ${z};
			}

			/* Line & column number "badge" for unselected call stack row (basically all other rows) */
			.debug-pane .line-number {
				background-color: ${U.transparent(0.6)};
				color: ${z.transparent(0.6)};
			}

			/* State "badge" displaying the active session's current state.
			* Only visible when there are more active debug sessions/threads running.
			*/
			.debug-pane .debug-call-stack .thread > .state.label,
			.debug-pane .debug-call-stack .session > .state.label {
				background-color: ${V};
				color: ${q};
			}

			/* State "badge" displaying the active session's current state.
			* Only visible when there are more active debug sessions/threads running
			* and thread paused due to a thrown exception.
			*/
			.debug-pane .debug-call-stack .thread > .state.label.exception,
			.debug-pane .debug-call-stack .session > .state.label.exception {
				background-color: ${H};
				color: ${x};
			}

			/* Info "badge" shown when the debugger pauses due to a thrown exception. */
			.debug-pane .call-stack-state-message > .label.exception {
				background-color: ${H};
				color: ${x};
			}

			/* Animation of changed values in Debug viewlet */
			@keyframes debugViewletValueChanged {
				0%   { background-color: ${G.transparent(0)} }
				5%   { background-color: ${G.transparent(0.9)} }
				100% { background-color: ${G.transparent(0.3)} }
			}

			.debug-pane .monaco-list-row .expression .value.changed {
				background-color: ${G.transparent(0.3)};
				animation-name: debugViewletValueChanged;
				animation-duration: 1s;
				animation-fill-mode: forwards;
			}

			.monaco-list-row .expression .lazy-button:hover {
				background-color: ${K}
			}
		`);
						const J = O.getColor(t.$OP);
						J &&
							B.addRule(`
			.debug-pane .line-number {
				border: 1px solid ${J};
			}
			`),
							(0, m.$gP)(O.type) &&
								B.addRule(`
			.debug-pane .line-number {
				background-color: ${U};
				color: ${z};
			}`);
						const W = O.getColor(u),
							X = O.getColor(a),
							Y = O.getColor(h),
							ie = O.getColor(c),
							ne = O.getColor(n),
							ee = O.getColor(p),
							_ = O.getColor(g);
						B.addRule(`
			.monaco-workbench .monaco-list-row .expression .name {
				color: ${W};
			}

			.monaco-workbench .monaco-list-row .expression .type {
				color: ${X};
			}

			.monaco-workbench .monaco-list-row .expression .value,
			.monaco-workbench .debug-hover-widget .value {
				color: ${Y};
			}

			.monaco-workbench .monaco-list-row .expression .value.string,
			.monaco-workbench .debug-hover-widget .value.string {
				color: ${ie};
			}

			.monaco-workbench .monaco-list-row .expression .value.boolean,
			.monaco-workbench .debug-hover-widget .value.boolean {
				color: ${ne};
			}

			.monaco-workbench .monaco-list-row .expression .error,
			.monaco-workbench .debug-hover-widget .error,
			.monaco-workbench .debug-pane .debug-variables .scope .error {
				color: ${ee};
			}

			.monaco-workbench .monaco-list-row .expression .value.number,
			.monaco-workbench .debug-hover-widget .value.number {
				color: ${_};
			}
		`);
						const te = O.getColor(t.$VR) || E.$UL.fromHex("#80808060"),
							Q = O.getColor(y),
							Z = O.getColor($),
							se = O.getColor(v),
							re = O.getColor(S),
							le = O.getColor(I);
						B.addRule(`
			.repl .repl-input-wrapper {
				border-top: 1px solid ${te};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.info {
				color: ${Q};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.warn {
				color: ${Z};
			}

			.monaco-workbench .repl .repl-tree .output .expression .value.error {
				color: ${se};
			}

			.monaco-workbench .repl .repl-tree .output .expression .source {
				color: ${re};
			}

			.monaco-workbench .repl .repl-tree .monaco-tl-contents .arrow {
				color: ${le};
			}
		`),
							O.defines(I) ||
								B.addRule(`
				.monaco-workbench.vs .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 0.25;
				}

				.monaco-workbench.vs-dark .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 0.4;
				}

				.monaco-workbench.hc-black .repl .repl-tree .monaco-tl-contents .arrow,
				.monaco-workbench.hc-light .repl .repl-tree .monaco-tl-contents .arrow {
					opacity: 1;
				}
			`);
						const oe = O.getColor(e.$NKb);
						oe &&
							B.addRule(
								`.monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$uKb)} { color: ${oe}; }`,
							);
						const ae = O.getColor(T);
						ae &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$oKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$oKb)} { color: ${ae}; }`,
							);
						const pe = O.getColor(P);
						pe &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$hKb)},.monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$hKb)} { color: ${pe}; }`,
							);
						const $e = O.getColor(k);
						$e &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$iKb)},.monaco-workbench .debug-view-content ${w.ThemeIcon.asCSSSelector(d.$iKb)}, .monaco-workbench .debug-toolbar ${w.ThemeIcon.asCSSSelector(d.$iKb)}, .monaco-workbench .command-center-center ${w.ThemeIcon.asCSSSelector(d.$iKb)} { color: ${$e}; }`,
							);
						const ye = O.getColor(L);
						ye &&
							B.addRule(
								`.monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$jKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$gKb)}, .monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$jKb)}, .monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$gKb)} { color: ${ye}; }`,
							);
						const ue = O.getColor(D);
						ue &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$kKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$kKb)} { color: ${ue}; }`,
							);
						const fe = O.getColor(M);
						fe &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$lKb)}, .monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$lKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$lKb)} { color: ${fe}; }`,
							);
						const me = O.getColor(N);
						me &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$mKb)}, .monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$mKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$mKb)} { color: ${me}; }`,
							);
						const ve = O.getColor(A);
						ve &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$pKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$pKb)}, .monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$qKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$qKb)} { color: ${ve}; }`,
							);
						const ge = O.getColor(R);
						ge &&
							B.addRule(
								`.monaco-workbench .part > .title > .title-actions .action-label${w.ThemeIcon.asCSSSelector(d.$nKb)}, .monaco-workbench ${w.ThemeIcon.asCSSSelector(d.$nKb)} { color: ${ge}; }`,
							);
					});
				}
			},
		)
