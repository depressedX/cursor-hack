define(
			de[4321],
			he([1, 0, 2, 2, 2, 2, 13, 1374, 147, 2511]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$vfd = void 0);
				const r = (0, t.template)(
						'<div class="cursor-card-modal-bottom"><div class="cursor-card-modal-spacer">',
					),
					u = (a) => {
						const [h, c] = (0, C.createSignal)(0),
							n = () => {
								c((h() + 1) % a.children.length);
							},
							g = () => {
								c((h() - 1 + a.children.length) % a.children.length);
							};
						return (0, w.createComponent)(d.$ufd, {
							get disableClickOff() {
								return a.disableClickOff;
							},
							get closeModal() {
								return a.closeModal;
							},
							get children() {
								return [
									(0, E.memo)(() => a.children[h()]),
									(() => {
										const p = r(),
											o = p.firstChild;
										return (
											(0, i.insert)(
												p,
												(0, w.createComponent)(C.Show, {
													get when() {
														return h() > 0;
													},
													get children() {
														return (0, w.createComponent)(m.$rdc, {
															title: "Go back",
															type: "secondary",
															onClick: g,
															extras: {
																style: {
																	padding: "8px 12px",
																	color: "#bbb",
																	"margin-right": "8px",
																	"font-size": "14px",
																},
															},
														});
													},
												}),
												null,
											),
											(0, i.insert)(
												p,
												(0, w.createComponent)(m.$rdc, {
													get title() {
														return h() === a.children.length - 1
															? "Done"
															: "Next";
													},
													onClick: () => {
														h() < a.children.length - 1 ? n() : a.submitModal();
													},
													extras: {
														style: { padding: "8px 12px", "font-size": "16px" },
													},
												}),
												null,
											),
											p
										);
									})(),
								];
							},
						});
					};
				e.$vfd = u;
			},
		),
		