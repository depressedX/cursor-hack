define(
			de[3919],
			he([1, 0, 322, 59, 12, 19, 9, 63, 44, 1271, 444, 819, 632]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$V_b = c);
				async function c(n, g, p) {
					let o = (0, h.$K9b)(n),
						f = (0, h.$L9b)(o);
					w.$l && (f = f.replaceAll("/", "\\"));
					let s = (
						await g.anythingQuickAccessProvider.getFilePicks(
							(0, t.$hs)(f),
							new i.$Gc(),
							p.token,
						)
					).map((T) => T.resource ?? C.URI.parse(""));
					const y = g.editorService
						.getEditors(m.EditorsOrder.MOST_RECENTLY_ACTIVE)
						.map((T) => T.editor.resource)
						.filter((T) => T !== void 0);
					s = s.concat(y);
					let $ = [];
					try {
						const T = await g.commandService.executeCommand(
								"git.api.getRepositories",
							),
							P = s.map((k) => k.toString());
						$ = (
							await Promise.all(
								T.map(async (k) => {
									const L = P.filter((D) => D.startsWith(k));
									return k && L.length > 0
										? await g.commandService.executeCommand(
												"git.api.checkIgnore",
												k,
												L,
											)
										: [];
								}),
							)
						).flat();
					} catch (T) {
						console.error("ERROR during git call to ignored files"),
							console.error(T);
					}
					let v = (0, a.$Q_b)(g, s);
					v = v.filter((T) => {
						let P = g.workspaceContextService.asRelativePath(T).toLowerCase(),
							k = [[0], [0]];
						for (let L = 0; L < P.length; L++)
							k[0].push(k[0][L]),
								k[1].push(Math.max(k[1][L], Math.min(f.length, k[0][L] + 1))),
								k[0][L] < f.length &&
									P[L] === f[k[0][L]] &&
									(k[0][L + 1] = k[0][L] + 1),
								k[1][L] < f.length &&
									P[L] === f[k[1][L]] &&
									(k[1][L + 1] = k[1][L] + 1);
						return k[1][P.length] >= f.length;
					});
					const S = v.map((T) => {
						let P = 9;
						const k = g.workspaceContextService.asRelativePath(T).toLowerCase(),
							L = (0, E.$kh)(T).toLowerCase().replaceAll("\\", "/"),
							D = f.toLowerCase(),
							M = !1;
						if (k.endsWith(D) || (k + "/").endsWith(D)) P = 16;
						else if (L.startsWith(D)) P = 15;
						else if (L.includes(D) && M) P = 14;
						else if (L.includes(D)) P = 13;
						else {
							const N = (0, a.$O_b)(D, L);
							if (N > 0 && M) P = 12 + N / 4;
							else if (N > 0) P = 11 + N / 4;
							else {
								const A = (0, a.$O_b)(D, k);
								A > 0 && M
									? (P = 10 + A / 4)
									: A > 0
										? (P = 9 + A / 4)
										: (P = 8);
							}
						}
						return (
							r.$J_b.test(T.path) && (P = 7),
							r.$K_b.test(T.path) && (P = 6),
							$.includes(T.path) && (P = 5),
							{ folder: T, score: P }
						);
					});
					S.sort((T, P) => P.score - T.score);
					const I = (0, t.$hs)(f);
					return S.map((T) => {
						const P = (0, E.$kh)(T.folder).replaceAll("\\", "/"),
							k = g.workspaceContextService
								.asRelativePath(T.folder)
								.replaceAll("\\", "/"),
							{ labelMatch: L, descriptionMatch: D } = (0, t.$fs)(
								{ label: P, description: k },
								I,
								!0,
								d.$CJ,
								g.anythingQuickAccessProvider.scorerCache,
							);
						return {
							name: P,
							type: u.EverythingSearchOptionType.Folder,
							score: T.score,
							uri: T.folder,
							secondaryText: k,
							labelMatches: L,
							descriptionMatches: D,
						};
					});
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	