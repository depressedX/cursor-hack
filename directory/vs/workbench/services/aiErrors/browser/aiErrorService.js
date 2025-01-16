define(
			de[401],
			he([1, 0, 340, 83, 31, 57, 20, 5, 180, 40, 45, 1286, 315, 232, 58, 148]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c, n, g) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Y6b = e.$W6b = void 0),
					(e.$X6b = p),
					(e.$W6b = (0, d.$Mi)("aiErrorService"));
				function p(f) {
					((l) => {
						l.details = l.details.map((y) => {
							const $ = "value" in y && y.value instanceof Uint8Array;
							if ("value" in y && $ === !1) {
								const v = Object.values(y.value);
								y.value = Uint8Array.from(v);
							}
							return y;
						});
					})(f);
					const s = f.findDetails(i.$at);
					if (s) return s.at(0);
				}
				let o = class {
					constructor(b, s, l, y, $, v, S, I) {
						(this.c = b),
							(this.d = s),
							(this.f = l),
							(this.g = y),
							(this.i = $),
							(this.j = v),
							(this.k = S),
							(this.l = I),
							(this.a = []),
							(this.m = []);
					}
					addErrorPopupHandler(b) {
						this.m.push(b);
					}
					removeErrorPopupHandler(b) {
						this.m = this.m.filter((s) => s !== b);
					}
					tryRerun(b) {
						const s = this.okToRerun();
						this.a.push(Date.now()),
							(b !== !0 || s) && this.b !== void 0 && this.b();
					}
					okToRerun() {
						const l = Date.now(),
							y = this.a.slice(-2),
							$ = y.length < 2 || !y.every((v) => l - v < 5e3);
						return (this.a = this.a.slice(-2)), $;
					}
					shouldShowImmediateErrorMessage(b) {
						if (!(b instanceof t.ConnectError) || b.code === t.Code.Canceled)
							return !1;
						const s = p(b);
						if (!s) return !0;
						const l = s.error;
						return !(
							l === i.ErrorDetails_Error.NOT_LOGGED_IN ||
							l === i.ErrorDetails_Error.AGENT_REQUIRES_LOGIN ||
							l === i.ErrorDetails_Error.PRO_USER_USAGE_LIMIT ||
							l === i.ErrorDetails_Error.FREE_USER_USAGE_LIMIT ||
							l === i.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED ||
							l === i.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED ||
							l === i.ErrorDetails_Error.BAD_API_KEY ||
							l === i.ErrorDetails_Error.BAD_MODEL_NAME ||
							l === i.ErrorDetails_Error.AUTH_TOKEN_EXPIRED ||
							l === i.ErrorDetails_Error.MAX_TOKENS ||
							s.details?.shouldShowImmediateError === !1
						);
					}
					n(b, s, l, y, $, v, S) {
						if (s?.details?.shouldShowImmediateError === !1) return;
						if (!s?.isExpected) {
							const P = y.rawMessage ?? "unknown error",
								k = {
									bugId: $,
									bug: `automatic-from-connection-error.

request ID:${$}

error:${JSON.stringify(s?.error)}

error:${JSON.stringify(y)}`,
									priority: g.ReportBugRequest_BugType.MEDIUM,
									protoURL: l,
									contactEmail: "automatic-from-connection-error",
									connectionErrorRaw: P,
									failingRequestID: $,
									connectErrorCode: y.code,
									errorDetailCode: b,
									errorDetailTitle: s?.details?.title,
									errorDetailDetail: s?.details?.detail,
								};
							this.l.executeCommand(n.$qX, k);
						}
						let I;
						switch (b) {
							case i.ErrorDetails_Error.OPENAI_RATE_LIMIT_EXCEEDED:
								I = "openai_rate_limit";
								break;
							case i.ErrorDetails_Error.OPENAI_ACCOUNT_LIMIT_EXCEEDED:
								I = "cursor_rate_limit";
								break;
							case i.ErrorDetails_Error.SLASH_EDIT_FILE_TOO_LONG:
								I = "fast_apply_large_file";
								break;
							case i.ErrorDetails_Error.FILE_UNSUPPORTED:
								I = "fast_apply_file_unsupported";
								break;
							case i.ErrorDetails_Error.CLAUDE_IMAGE_TOO_LARGE:
								I = "claude_image_too_large";
								break;
							case i.ErrorDetails_Error.API_KEY_RATE_LIMIT:
								I = "api_key_rate_limit";
								break;
							case i.ErrorDetails_Error.OPENAI:
								I = "openai";
								break;
							case i.ErrorDetails_Error.GPT_4_VISION_PREVIEW_RATE_LIMIT:
								I = "gpt_4_vision_rate_limit";
								break;
							default:
								I = "internet";
						}
						let T =
							I === "internet"
								? {
										case: I,
										generationUUID: $,
										errorCode: void 0,
										source: v,
										error: s,
									}
								: { case: I, source: v, error: s };
						this.j.setNonPersistentStorage("showingErrorMetadata", T);
					}
					handleError(b, s, l, y, $, v) {
						const S = p(b);
						console.log("error", b), console.log("errordetail", S);
						const I = S?.error,
							T = S;
						if (
							((this.b = v),
							this.j.setNonPersistentStorage(
								"showingErrorHasRerun",
								v !== void 0,
							),
							this.shouldShowImmediateErrorMessage(b))
						) {
							this.n(I, T, y, b, l, $, v);
							return;
						}
						if (
							I === i.ErrorDetails_Error.NOT_LOGGED_IN ||
							I === i.ErrorDetails_Error.AGENT_REQUIRES_LOGIN ||
							I === i.ErrorDetails_Error.PRO_USER_USAGE_LIMIT ||
							I === i.ErrorDetails_Error.FREE_USER_USAGE_LIMIT ||
							I === i.ErrorDetails_Error.FREE_USER_RATE_LIMIT_EXCEEDED ||
							I === i.ErrorDetails_Error.PRO_USER_RATE_LIMIT_EXCEEDED ||
							I === i.ErrorDetails_Error.BAD_API_KEY ||
							I === i.ErrorDetails_Error.BAD_MODEL_NAME
						) {
							const P = s?.modelName ?? "cursor-small";
							this.m.forEach((k) =>
								k(
									new a.$Q6b(P, I, () => {
										if (v) {
											const L = this.okToRerun();
											this.a.push(Date.now()), L && v();
										}
									}),
									this.c,
									this.d,
								),
							);
						} else
							I === i.ErrorDetails_Error.AUTH_TOKEN_EXPIRED
								? this.k.refreshAuthentication().then(async () => {
										const P = await this.k.getAccessToken();
										if (v && P && !this.k.isTokenExpired(P)) {
											const k = this.okToRerun();
											this.a.push(Date.now()), k && v();
										} else
											this.j.setNonPersistentStorage("showingErrorMetadata", {
												case: "internet",
												generationUUID: l,
												source: $,
												error: S,
											});
									})
								: I === i.ErrorDetails_Error.MAX_TOKENS
									? this.j.setNonPersistentStorage("maxTokensHit", !0)
									: this.n(I, T, y, b, l, "other", v);
					}
				};
				(e.$Y6b = o),
					(e.$Y6b = o =
						Ne(
							[
								j(0, m.$jEb),
								j(1, d.$Li),
								j(2, r.$4N),
								j(3, h.$S6b),
								j(4, E.$GO),
								j(5, u.$0zb),
								j(6, c.$x6b),
								j(7, w.$ek),
							],
							o,
						)),
					(0, C.$lK)(e.$W6b, o, C.InstantiationType.Delayed);
			},
		),
		