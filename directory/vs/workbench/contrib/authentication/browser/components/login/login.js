define(
			de[1987],
			he([1, 0, 2, 2, 2, 2, 13, 14, 79, 147, 36, 2385]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$3Zc = g);
				const a = (0, t.template)("<span>Skip for now."),
					h = (0, t.template)("<span>Yes, skip login."),
					c = (0, t.template)(
						'<div><div class="settings__buttons"></div><div class="settings__item_description subheading">',
					),
					n = (0, m.$$O)(
						"tabbar-remove-chat",
						d.$ak.x,
						"Icon for removing a tab in the tab list for chats.",
					);
				function g(p) {
					const o =
							"To avoid abuse on our backend, we ask that you login to use the AI features.",
						[f, b] = (0, C.createSignal)(o);
					(0, C.createEffect)(() => {
						p.message && b(p.message);
					}, [p.message]);
					const l = (0, u.$odc)()?.cursorAuthenticationService,
						[y, $] = (0, C.createSignal)(!1);
					(0, C.createEffect)(() => {
						l.addLoginChangedListener($),
							$(l.isAuthenticated()),
							(0, C.onCleanup)(() => {
								l.removeLoginChangedListener($);
							});
					});
					const [v, S] = (0, C.createSignal)(!1);
					return (() => {
						const I = c(),
							T = I.firstChild,
							P = T.nextSibling;
						return (
							I.style.setProperty("text-align", "center"),
							I.style.setProperty("margin-bottom", "24px"),
							T.style.setProperty("gap", "6px"),
							T.style.setProperty("align-items", "center"),
							(0, w.insert)(
								T,
								(0, E.createComponent)(r.$rdc, {
									onClick: () => {
										l.login();
									},
									type: "primary",
									title: "Log In",
									extras: {
										style: {
											"font-size": "14px",
											padding: "8px 12px",
											"border-radius": "6px",
											border: "1px solid transparent",
											width: "200px",
										},
									},
								}),
								null,
							),
							(0, w.insert)(
								T,
								(0, E.createComponent)(r.$rdc, {
									onClick: () => {
										l.signup();
									},
									type: "secondary",
									title: "Sign Up",
									extras: {
										style: {
											"font-size": "14px",
											padding: "8px 12px",
											"border-radius": "6px",
											border: "1px solid var(--vscode-settings-dropdownBorder)",
											width: "200px",
										},
									},
								}),
								null,
							),
							P.style.setProperty("margin-top", "8px"),
							(0, w.insert)(
								P,
								(0, E.createComponent)(C.Switch, {
									get children() {
										return [
											(0, E.createComponent)(C.Match, {
												get when() {
													return !v();
												},
												get children() {
													return [
														(0, i.memo)(() => f()),
														" ",
														(0, E.createComponent)(C.Show, {
															get when() {
																return p.skipForNowCallback;
															},
															get children() {
																const k = a();
																return (
																	k.addEventListener("click", () => {
																		S(!0);
																	}),
																	k.style.setProperty("cursor", "pointer"),
																	k.style.setProperty(
																		"text-decoration",
																		"underline",
																	),
																	k
																);
															},
														}),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												get when() {
													return v() && p.skipForNowCallback;
												},
												get children() {
													return [
														"Are you sure you want to skip login? You can log in later, but it takes less than a minute now, and without it, you won't be able to use any of the AI features.",
														" ",
														(() => {
															const k = h();
															return (
																k.addEventListener("click", () => {
																	p.skipForNowCallback?.();
																}),
																k.style.setProperty("cursor", "pointer"),
																k.style.setProperty(
																	"text-decoration",
																	"underline",
																),
																k
															);
														})(),
													];
												},
											}),
											(0, E.createComponent)(C.Match, {
												when: !0,
												get children() {
													return f();
												},
											}),
										];
									},
								}),
							),
							I
						);
					})();
				}
			},
		),
		