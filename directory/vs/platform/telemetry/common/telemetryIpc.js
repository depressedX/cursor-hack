define(de[2815], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$17c = e.$Z7c = void 0);
			class t {
				constructor(E) {
					this.b = E;
				}
				listen(E, C) {
					throw new Error(`Event not found: ${C}`);
				}
				call(E, C, { eventName: d, data: m }) {
					return C === "capture"
						? (this.b.forEach((r) => r.capture(d, m)), Promise.resolve(null))
						: C === "registerAuthId"
							? (this.b.forEach((r) => r.registerAuthId(m)),
								Promise.resolve(null))
							: (this.b.forEach((r) => r.log(d, m)), Promise.resolve(null));
				}
			}
			e.$Z7c = t;
			class i {
				constructor(E) {
					this.b = E;
				}
				log(E, C) {
					return (
						this.b
							.call("log", { eventName: E, data: C })
							.then(
								void 0,
								(d) => `Failed to log telemetry: ${console.warn(d)}`,
							),
						Promise.resolve(null)
					);
				}
				flush() {
					return Promise.resolve();
				}
				registerAuthId(E) {
					this.b.call("registerAuthId", {
						eventName: "registerAuthId",
						data: E,
					});
				}
				capture(E, C) {
					return (
						this.b
							.call("capture", { eventName: E, data: C })
							.then(
								void 0,
								(d) => `Failed to log telemetry: ${console.warn(d)}`,
							),
						Promise.resolve(null)
					);
				}
			}
			e.$17c = i;
		}),
		define(
			de[269],
			he([1, 0, 82, 28, 438, 1640, 32]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Wp = e.$Vp = e.$Up = e.$Tp = e.$Sp = e.$Rp = e.$Qp = void 0),
					(e.$Xp = u),
					(e.$Yp = a),
					(e.$Zp = h),
					(e.$1p = c),
					(e.$2p = g),
					(e.$3p = p),
					(e.$4p = f),
					(e.$5p = b),
					(e.$6p = y);
				class d {
					constructor(v) {
						(this.value = v), (this.isTrustedTelemetryValue = !0);
					}
				}
				e.$Qp = d;
				class m {
					constructor() {
						(this.telemetryLevel = C.TelemetryLevel.NONE),
							(this.sessionId = "someValue.sessionId"),
							(this.machineId = "someValue.machineId"),
							(this.macMachineId = "someValue.macMachineId"),
							(this.sqmId = "someValue.sqmId"),
							(this.devDeviceId = "someValue.devDeviceId"),
							(this.firstSessionDate = "someValue.firstSessionDate"),
							(this.sendErrorTelemetry = !1);
					}
					registerAuthId() {}
					publicLog() {}
					publicLog2() {}
					publicLogError() {}
					publicLogError2() {}
					publicLogCapture() {}
					setExperimentProperty() {}
				}
				(e.$Rp = m), (e.$Sp = new m());
				class r {
					async publicLog(v, S, I) {}
					async publicLogError(v, S, I) {}
				}
				(e.$Tp = r),
					(e.$Up = "telemetry"),
					(e.$Vp = "extensionTelemetryLog"),
					(e.$Wp = {
						registerAuthId: () => null,
						log: () => null,
						flush: () => Promise.resolve(null),
						capture: () => null,
					});
				function u($, v) {
					return !v.isBuilt && !v.disableTelemetry
						? !0
						: !(v.disableTelemetry || !$.enableTelemetry);
				}
				function a($, v) {
					return v.extensionTestsLocationURI
						? !0
						: !(
								v.isBuilt ||
								v.disableTelemetry ||
								($.enableTelemetry && $.aiConfig?.ariaKey)
							);
				}
				function h($) {
					const v = $.getValue(C.$wm),
						S = $.getValue(C.$xm);
					if ($.getValue(C.$ym) === !1 || S === !1)
						return C.TelemetryLevel.NONE;
					switch (v ?? C.TelemetryConfiguration.ON) {
						case C.TelemetryConfiguration.ON:
							return C.TelemetryLevel.USAGE;
						case C.TelemetryConfiguration.OFF:
							return C.TelemetryLevel.NONE;
					}
				}
				function c($) {
					const v = {},
						S = {},
						I = {};
					o($, I);
					for (let T in I) {
						T = T.length > 150 ? T.substr(T.length - 149) : T;
						const P = I[T];
						typeof P == "number"
							? (S[T] = P)
							: typeof P == "boolean"
								? (S[T] = P ? 1 : 0)
								: typeof P == "string"
									? (P.length > 8192 &&
											console.warn(
												`Telemetry property: ${T} has been trimmed to 8192, the original length is ${P.length}`,
											),
										(v[T] = P.substring(0, 8191)))
									: typeof P < "u" && P !== null && (v[T] = P);
					}
					return { properties: v, measurements: S };
				}
				const n = new Set([
					"ssh-remote",
					"dev-container",
					"attached-container",
					"wsl",
					"tunnel",
					"codespaces",
					"amlext",
				]);
				function g($) {
					return $;
				}
				function p($) {
					if (!$) return "none";
					const v = (0, w.$xn)($);
					return n.has(v) ? v : "other";
				}
				function o($, v, S = 0, I) {
					if ($)
						for (const T of Object.getOwnPropertyNames($)) {
							const P = $[T],
								k = I ? I + T : T;
							Array.isArray(P)
								? (v[k] = (0, t.$Ao)(P))
								: P instanceof Date
									? (v[k] = P.toISOString())
									: (0, i.$ng)(P)
										? S < 2
											? o(P, v, S + 1, k + ".")
											: (v[k] = (0, t.$Ao)(P))
										: (v[k] = P);
						}
				}
				function f($, v) {
					const S = $.msftInternalDomains || [],
						I = v.getValue("telemetry.internalTesting");
					return (0, E.$Pp)(S) || I;
				}
				function b($) {
					return [
						$.appRoot,
						$.extensionsPath,
						$.userHome.fsPath,
						$.tmpDir.fsPath,
						$.userDataPath,
					];
				}
				function s($, v) {
					if (!$ || (!$.includes("/") && !$.includes("\\"))) return $;
					let S = $;
					const I = [];
					for (const L of v)
						for (;;) {
							const D = L.exec($);
							if (!D) break;
							I.push([D.index, L.lastIndex]);
						}
					const T = /^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/,
						P =
							/(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
					let k = 0;
					for (S = ""; ; ) {
						const L = P.exec($);
						if (!L) break;
						const D = I.some(([M, N]) => L.index < N && M < P.lastIndex);
						!T.test(L[0]) &&
							!D &&
							((S += $.substring(k, L.index) + "<REDACTED: user-file-path>"),
							(k = P.lastIndex));
					}
					return k < $.length && (S += $.substr(k)), S;
				}
				function l($) {
					if (!$) return $;
					const v = [
						{ label: "Google API Key", regex: /AIza[A-Za-z0-9_\\\-]{35}/ },
						{ label: "Slack Token", regex: /xox[pbar]\-[A-Za-z0-9]/ },
						{
							label: "GitHub Token",
							regex:
								/(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/,
						},
						{
							label: "Generic Secret",
							regex:
								/(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i,
						},
						{
							label: "CLI Credentials",
							regex:
								/((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/,
						},
						{ label: "Email", regex: /@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+/ },
					];
					for (const S of v)
						if (S.regex.test($)) return `<REDACTED: ${S.label}>`;
					return $;
				}
				function y($, v) {
					return (0, t.$xo)($, (S) => {
						if (
							S instanceof d ||
							Object.hasOwnProperty.call(S, "isTrustedTelemetryValue")
						)
							return S.value;
						if (typeof S == "string") {
							let I = S.replaceAll("%20", " ");
							I = s(I, v);
							for (const T of v) I = I.replace(T, "");
							return (I = l(I)), I;
						}
					});
				}
			},
		),
		define(
			de[2816],
			he([1, 0, 32, 269, 2702, 536]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$g4b = void 0);
				class C {
					get d() {
						return !0;
					}
					constructor(m, r, u, a, h, c) {
						(this.e = m),
							(this.f = r),
							(this.g = u),
							(this.h = a),
							(this.i = h),
							(this.j = c),
							(this.b = !1),
							!(a.extensionTestsLocationURI !== void 0) &&
								u.tasConfig &&
								this.d &&
								(0, i.$Zp)(this.f) === t.TelemetryLevel.USAGE &&
								(this.a = this.k());
						const g = this.f.getValue("experiments.overrideDelay"),
							p = typeof g == "number" ? g : 0;
						this.c = new Promise((o) => setTimeout(o, p));
					}
					async getTreatment(m) {
						await this.c;
						const r = this.f.getValue("experiments.override." + m);
						if (r !== void 0) return r;
						if (!this.a || !this.d) return;
						let u;
						const a = await this.a;
						return (
							this.b
								? (u = a.getTreatmentVariable("vscode", m))
								: (u = await a.getTreatmentVariableAsync("vscode", m, !0)),
							(u = a.getTreatmentVariable("vscode", m)),
							u
						);
					}
					async k() {
						const m =
								this.g.quality === "stable"
									? w.TargetPopulation.Public
									: this.g.quality === "exploration"
										? w.TargetPopulation.Exploration
										: w.TargetPopulation.Insiders,
							r = new w.$f4b(this.g.version, this.g.nameLong, this.e, m),
							u = this.g.tasConfig,
							a = new (
								await (0, E.$Tq)("tas-client-umd", "lib/tas-client-umd.js")
							).ExperimentationService({
								filterProviders: [r],
								telemetry: this.i,
								storageKey: w.$d4b,
								keyValueStorage: this.j,
								assignmentContextTelemetryPropertyName:
									u.assignmentContextTelemetryPropertyName,
								telemetryEventName: u.telemetryEventName,
								endpoint: u.endpoint,
								refetchInterval: w.$e4b,
							});
						return (
							await a.initializePromise,
							a.initialFetch.then(() => (this.b = !0)),
							a
						);
					}
				}
				e.$g4b = C;
			},
		),
		define(
			de[154],
			he([1, 0, 37, 119, 109, 12, 9, 29, 344, 269]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$dq = e.$8p = void 0),
					(e.$7p = u),
					(e.$9p = n),
					(e.$0p = g),
					(e.$$p = p),
					(e.$_p = o),
					(e.$aq = f),
					(e.$bq = b),
					(e.$cq = s),
					(e.$eq = l),
					(e.$fq = $);
				function u(v, S) {
					return v.uuid && S.uuid
						? v.uuid === S.uuid
						: v.id === S.id
							? !0
							: (0, t.$Hf)(v.id, S.id) === 0;
				}
				const a = /^([^.]+\..+)-(\d+\.\d+\.\d+)(-(.+))?$/;
				class h {
					static create(S) {
						const I = S.manifest ? S.manifest.version : S.version,
							T = S.manifest ? S.targetPlatform : S.properties.targetPlatform;
						return new h(S.identifier, I, T);
					}
					static parse(S) {
						const I = a.exec(S);
						return I && I[1] && I[2]
							? new h({ id: I[1] }, I[2], I[4] || void 0)
							: null;
					}
					constructor(S, I, T = w.TargetPlatform.UNDEFINED) {
						(this.identifier = S),
							(this.version = I),
							(this.targetPlatform = T),
							(this.id = S.id);
					}
					toString() {
						return `${this.id}-${this.version}${this.targetPlatform !== w.TargetPlatform.UNDEFINED ? `-${this.targetPlatform}` : ""}`;
					}
					equals(S) {
						return S instanceof h
							? u(this, S) &&
									this.version === S.version &&
									this.targetPlatform === S.targetPlatform
							: !1;
					}
				}
				e.$8p = h;
				const c = /^([^.]+\..+)@((prerelease)|(\d+\.\d+\.\d+(-.*)?))$/;
				function n(v) {
					const S = c.exec(v);
					return S && S[1] ? [p(S[1]), S[2]] : [p(v), void 0];
				}
				function g(v, S) {
					return `${v}.${S}`;
				}
				function p(v) {
					return v.toLowerCase();
				}
				function o(v, S) {
					return p(g(v ?? w.$Cn, S));
				}
				function f(v, S) {
					const I = [],
						T = (P) => {
							for (const k of I) if (k.some((L) => u(S(L), S(P)))) return k;
							return null;
						};
					for (const P of v) {
						const k = T(P);
						k ? k.push(P) : I.push([P]);
					}
					return I;
				}
				function b(v) {
					return {
						id: v.identifier.id,
						name: v.manifest.name,
						galleryId: null,
						publisherId: v.publisherId,
						publisherName: v.manifest.publisher,
						publisherDisplayName: v.publisherDisplayName,
						dependencies:
							v.manifest.extensionDependencies &&
							v.manifest.extensionDependencies.length > 0,
					};
				}
				function s(v) {
					return {
						id: new r.$Qp(v.identifier.id),
						name: new r.$Qp(v.name),
						version: v.version,
						galleryId: v.identifier.uuid,
						publisherId: v.publisherId,
						publisherName: v.publisher,
						publisherDisplayName: v.publisherDisplayName,
						isPreReleaseVersion: v.properties.isPreReleaseVersion,
						dependencies: !!(
							v.properties.dependencies && v.properties.dependencies.length > 0
						),
						isSigned: v.isSigned,
						...v.telemetryData,
					};
				}
				e.$dq = new w.$Gn("pprice.better-merge");
				function l(v, S) {
					const I = [],
						T = S.manifest.extensionDependencies?.slice(0) ?? [];
					for (; T.length; ) {
						const P = T.shift();
						if (P && I.every((k) => !u(k.identifier, { id: P }))) {
							const k = v.filter((L) => u(L.identifier, { id: P }));
							k.length === 1 &&
								(I.push(k[0]),
								T.push(
									...(k[0].manifest.extensionDependencies?.slice(0) ?? []),
								));
						}
					}
					return I;
				}
				async function y(v, S) {
					if (!E.$n) return !1;
					let I;
					try {
						I = (
							await v.readFile(C.URI.file("/etc/os-release"))
						).value.toString();
					} catch {
						try {
							I = (
								await v.readFile(C.URI.file("/usr/lib/os-release"))
							).value.toString();
						} catch (P) {
							S.debug(
								"Error while getting the os-release file.",
								(0, d.$bb)(P),
							);
						}
					}
					return (
						!!I && (I.match(/^ID=([^\u001b\r\n]*)/m) || [])[1] === "alpine"
					);
				}
				async function $(v, S) {
					const I = await y(v, S),
						T = (0, i.$Ap)(I ? "alpine" : E.$x, m.$jc);
					return S.debug("ComputeTargetPlatform:", T), T;
				}
			},
		),
		define(
			de[2817],
			he([1, 0, 33, 29, 23, 19, 464, 9, 4, 119, 154, 109]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Yq = void 0);
				const h = (g) => (0, m.localize)(1794, null, g),
					c = (0, m.localize)(1795, null, "ms-dotnettools.csharp");
				let n = class {
					constructor(p, o, f) {
						(this.a = p), (this.b = o), (this.d = f);
					}
					get f() {}
					async listExtensions(p, o, f) {
						let b = await this.b.getInstalled(a.ExtensionType.User, f);
						const s = a.$Fn.map((y) => y.toLowerCase());
						if (o && o !== "") {
							if (s.indexOf(o.toLowerCase()) < 0) {
								this.a.info(
									"Invalid category please enter a valid category. To list valid categories run --category without a category specified",
								);
								return;
							}
							b = b.filter((y) =>
								y.manifest.categories
									? y.manifest.categories
											.map((v) => v.toLowerCase())
											.indexOf(o.toLowerCase()) > -1
									: !1,
							);
						} else if (o === "") {
							this.a.info("Possible Categories: "),
								s.forEach((y) => {
									this.a.info(y);
								});
							return;
						}
						this.f && this.a.info((0, m.localize)(1796, null, this.f)),
							(b = b.sort((y, $) =>
								y.identifier.id.localeCompare($.identifier.id),
							));
						let l;
						for (const y of b)
							l !== y.identifier.id &&
								((l = y.identifier.id),
								this.a.info(p ? `${l}@${y.manifest.version}` : l));
					}
					async installExtensions(p, o, f, b) {
						const s = [];
						try {
							p.length &&
								this.a.info(
									this.f
										? (0, m.localize)(1797, null, this.f)
										: (0, m.localize)(1798, null),
								);
							const l = [],
								y = [],
								$ = (S, I, T) => {
									y.push({
										id: S,
										version: I !== "prerelease" ? I : void 0,
										installOptions: {
											...f,
											isBuiltin: T,
											installPreReleaseVersion:
												I === "prerelease" || f.installPreReleaseVersion,
										},
									});
								};
							for (const S of p)
								if (S instanceof d.URI) l.push({ vsix: S, installOptions: f });
								else {
									const [I, T] = (0, u.$9p)(S);
									$(I, T, !1);
								}
							for (const S of o)
								if (S instanceof d.URI)
									l.push({
										vsix: S,
										installOptions: {
											...f,
											isBuiltin: !0,
											donotIncludePackAndDependencies: !0,
										},
									});
								else {
									const [I, T] = (0, u.$9p)(S);
									$(I, T, !0);
								}
							const v = await this.b.getInstalled(void 0, f.profileLocation);
							if (
								(l.length &&
									(await Promise.all(
										l.map(async ({ vsix: S, installOptions: I }) => {
											try {
												await this.h(S, I, b, v);
											} catch (T) {
												this.a.error(T), s.push(S.toString());
											}
										}),
									)),
								y.length)
							) {
								const S = await this.g(y, v, b);
								s.push(...S);
							}
						} catch (l) {
							throw (
								(this.a.error((0, m.localize)(1799, null, (0, i.$bb)(l))), l)
							);
						}
						if (s.length)
							throw new Error((0, m.localize)(1800, null, s.join(", ")));
					}
					async updateExtensions(p) {
						const o = await this.b.getInstalled(a.ExtensionType.User, p),
							f = [];
						for (const y of o)
							y.identifier.uuid &&
								f.push({ ...y.identifier, preRelease: y.preRelease });
						this.a.trace((0, m.localize)(1801, null, f.length));
						const b = await this.d.getExtensions(
								f,
								{ compatible: !0 },
								t.CancellationToken.None,
							),
							s = [];
						for (const y of b)
							for (const $ of o)
								(0, u.$7p)($.identifier, y.identifier) &&
									(0, C.gt)(y.version, $.manifest.version) &&
									s.push({
										extension: y,
										options: {
											operation: r.InstallOperation.Update,
											installPreReleaseVersion: $.preRelease,
											profileLocation: p,
											isApplicationScoped: $.isApplicationScoped,
										},
									});
						if (!s.length) {
							this.a.info((0, m.localize)(1802, null));
							return;
						}
						this.a.info(
							(0, m.localize)(
								1803,
								null,
								s.map((y) => y.extension.identifier.id).join(", "),
							),
						);
						const l = await this.b.installGalleryExtensions(s);
						for (const y of l)
							y.error
								? this.a.error(
										(0, m.localize)(
											1804,
											null,
											y.identifier.id,
											(0, i.$bb)(y.error),
										),
									)
								: this.a.info(
										(0, m.localize)(
											1805,
											null,
											y.identifier.id,
											y.local?.manifest.version,
										),
									);
					}
					async g(p, o, f) {
						if (
							((p = p.filter(({ id: y, version: $ }) => {
								const v = o.find((S) => (0, u.$7p)(S.identifier, { id: y }));
								if (v) {
									if (!f && (!$ || ($ === "prerelease" && v.preRelease)))
										return (
											this.a.info(
												(0, m.localize)(1806, null, y, v.manifest.version, y),
											),
											!1
										);
									if ($ && v.manifest.version === $)
										return (
											this.a.info((0, m.localize)(1807, null, `${y}@${$}`)), !1
										);
								}
								return !0;
							})),
							!p.length)
						)
							return [];
						const b = [],
							s = [],
							l = await this.j(p);
						if (
							(await Promise.all(
								p.map(async ({ id: y, version: $, installOptions: v }) => {
									const S = l.get(y.toLowerCase());
									if (!S) {
										this.a.error(`${h($ ? `${y}@${$}` : y)}
${c}`),
											b.push(y);
										return;
									}
									try {
										const T = await this.d.getManifest(
											S,
											t.CancellationToken.None,
										);
										if (T && !this.k(T)) return;
									} catch (T) {
										this.a.error(T.message || T.stack || T), b.push(y);
										return;
									}
									const I = o.find((T) =>
										(0, u.$7p)(T.identifier, S.identifier),
									);
									if (I) {
										if (S.version === I.manifest.version) {
											this.a.info(
												(0, m.localize)(1808, null, $ ? `${y}@${$}` : y),
											);
											return;
										}
										this.a.info((0, m.localize)(1809, null, y, S.version));
									}
									v.isBuiltin
										? this.a.info(
												$
													? (0, m.localize)(1810, null, y, $)
													: (0, m.localize)(1811, null, y),
											)
										: this.a.info(
												$
													? (0, m.localize)(1812, null, y, $)
													: (0, m.localize)(1813, null, y),
											),
										s.push({
											extension: S,
											options: {
												...v,
												installGivenVersion: !!$,
												isApplicationScoped:
													v.isApplicationScoped || I?.isApplicationScoped,
											},
										});
								}),
							),
							s.length)
						) {
							const y = await this.b.installGalleryExtensions(s);
							for (const $ of y)
								$.error
									? (this.a.error(
											(0, m.localize)(
												1814,
												null,
												$.identifier.id,
												(0, i.$bb)($.error),
											),
										),
										b.push($.identifier.id))
									: this.a.info(
											(0, m.localize)(
												1815,
												null,
												$.identifier.id,
												$.local?.manifest.version,
											),
										);
						}
						return b;
					}
					async h(p, o, f, b) {
						const s = await this.b.getManifest(p);
						if (!s) throw new Error("Invalid vsix");
						if (await this.l(s, f, o.profileLocation, b))
							try {
								await this.b.install(p, { ...o, installGivenVersion: !0 }),
									this.a.info((0, m.localize)(1816, null, (0, E.$kh)(p)));
							} catch (y) {
								if ((0, i.$8)(y))
									this.a.info((0, m.localize)(1817, null, (0, E.$kh)(p)));
								else throw y;
							}
					}
					async j(p) {
						const o = new Map(),
							f = p.some((l) => l.installOptions.installPreReleaseVersion),
							b = await this.b.getTargetPlatform(),
							s = [];
						for (const l of p)
							r.$sp.test(l.id) && s.push({ ...l, preRelease: f });
						if (s.length) {
							const l = await this.d.getExtensions(
								s,
								{ targetPlatform: b },
								t.CancellationToken.None,
							);
							for (const y of l) o.set(y.identifier.id.toLowerCase(), y);
						}
						return o;
					}
					k(p) {
						return !0;
					}
					async l(p, o, f, b) {
						if (!o) {
							const s = { id: (0, u.$_p)(p.publisher, p.name) },
								l = b.find(
									(y) =>
										(0, u.$7p)(s, y.identifier) &&
										(0, C.gt)(y.manifest.version, p.version),
								);
							if (l)
								return (
									this.a.info(
										(0, m.localize)(
											1818,
											null,
											l.identifier.id,
											l.manifest.version,
											p.version,
										),
									),
									!1
								);
						}
						return this.k(p);
					}
					async uninstallExtensions(p, o, f) {
						const b = async (l) => {
								if (l instanceof d.URI) {
									const y = await this.b.getManifest(l);
									return (0, u.$0p)(y.publisher, y.name);
								}
								return l;
							},
							s = [];
						for (const l of p) {
							const y = await b(l),
								v = (await this.b.getInstalled(void 0, f)).filter((S) =>
									(0, u.$7p)(S.identifier, { id: y }),
								);
							if (!v.length)
								throw new Error(`${this.m(y)}
${c}`);
							if (v.some((S) => S.type === a.ExtensionType.System)) {
								this.a.info((0, m.localize)(1819, null, y));
								return;
							}
							if (!o && v.some((S) => S.isBuiltin)) {
								this.a.info((0, m.localize)(1820, null, y));
								return;
							}
							this.a.info((0, m.localize)(1821, null, y));
							for (const S of v)
								await this.b.uninstall(S, { profileLocation: f }), s.push(S);
							this.f
								? this.a.info((0, m.localize)(1822, null, y, this.f))
								: this.a.info((0, m.localize)(1823, null, y));
						}
					}
					async locateExtension(p) {
						const o = await this.b.getInstalled();
						p.forEach((f) => {
							o.forEach((b) => {
								if (
									b.identifier.id === f &&
									b.location.scheme === w.Schemas.file
								) {
									this.a.info(b.location.fsPath);
									return;
								}
							});
						});
					}
					m(p) {
						return this.f
							? (0, m.localize)(1824, null, p, this.f)
							: (0, m.localize)(1825, null, p);
					}
				};
				(e.$Yq = n), (e.$Yq = n = Ne([j(1, r.$Hp), j(2, r.$Ep)], n));
			},
		),
		define(
			de[2818],
			he([1, 0, 33, 119, 154, 109]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ZTc = C);
				async function C(d, m, r, u, a) {
					try {
						const h = await d.getExtensionsControlManifest();
						if (!h.deprecated) return;
						const c = await d.getInstalled(E.ExtensionType.User);
						for (const [n, g] of Object.entries(h.deprecated)) {
							if (!g?.extension) continue;
							const { id: p, autoMigrate: o, preRelease: f } = g.extension;
							if (!o) continue;
							const b = c.find((l) => (0, w.$7p)(l.identifier, { id: n }));
							if (!b) continue;
							const s = (
								await m.getExtensions(
									[{ id: p, preRelease: f }],
									{
										targetPlatform: await d.getTargetPlatform(),
										compatible: !0,
									},
									t.CancellationToken.None,
								)
							)[0];
							if (!s) {
								a.info(
									`Skipping migrating '${b.identifier.id}' extension because, the comaptible target '${p}' extension is not found`,
								);
								continue;
							}
							try {
								a.info(
									`Migrating '${b.identifier.id}' extension to '${p}' extension...`,
								);
								const l = !u
									.getDisabledExtensions()
									.some(($) => (0, w.$7p)($, b.identifier));
								await d.uninstall(b),
									a.info(
										`Uninstalled the unsupported extension '${b.identifier.id}'`,
									);
								let y = c.find(($) => (0, w.$7p)($.identifier, { id: p }));
								(!y || (!y.isPreReleaseVersion && l)) &&
									((y = await d.installFromGallery(s, {
										installPreReleaseVersion: !0,
										isMachineScoped: b.isMachineScoped,
										operation: i.InstallOperation.Migrate,
									})),
									a.info(
										`Installed the pre-release extension '${y.identifier.id}'`,
									),
									l ||
										(await u.disableExtension(y.identifier),
										a.info(
											`Disabled the pre-release extension '${y.identifier.id}' because the unsupported extension '${b.identifier.id}' is disabled`,
										)),
									o.storage &&
										(r.addToMigrationList(
											(0, w.$0p)(b.manifest.publisher, b.manifest.name),
											(0, w.$0p)(y.manifest.publisher, y.manifest.name),
										),
										a.info(
											"Added pre-release extension to the storage migration list",
										))),
									a.info(
										`Migrated '${b.identifier.id}' extension to '${p}' extension.`,
									);
							} catch (l) {
								a.error(l);
							}
						}
					} catch (h) {
						a.error(h);
					}
				}
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[2819],
		he([1, 0, 3, 82, 12, 37, 4, 10, 81, 372, 62, 30, 32, 269]),
		function (ce, e, t, i, w, E, C, d, m, r, u, a, h, c) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$NJ = void 0),
				(r = xi(r));
			let n = class {
				static {
					this.IDLE_START_EVENT_NAME = "UserIdleStart";
				}
				static {
					this.IDLE_STOP_EVENT_NAME = "UserIdleStop";
				}
				constructor(o, f, b) {
					(this.k = f),
						(this.l = b),
						(this.d = {}),
						(this.i = new t.$Zc()),
						(this.j = []),
						(this.b = o.appenders),
						(this.c = o.commonProperties ?? Object.create(null)),
						(this.sessionId = this.c.sessionID),
						(this.machineId = this.c["common.machineId"]),
						(this.macMachineId = this.c["common.macMachineId"]),
						(this.sqmId = this.c["common.sqmId"]),
						(this.devDeviceId = this.c["common.devDeviceId"]),
						(this.firstSessionDate = this.c["common.firstSessionDate"]),
						(this.msftInternal = this.c["common.msftInternal"]),
						(this.f = o.piiPaths || []),
						(this.g = h.TelemetryLevel.USAGE),
						(this.h = !!o.sendErrorTelemetry),
						(this.j = [/(vscode-)?file:\/\/\/.*?\/resources\/app\//gi]);
					for (const s of this.f)
						this.j.push(new RegExp((0, E.$of)(s), "gi")),
							s.indexOf("\\") >= 0 &&
								this.j.push(
									new RegExp((0, E.$of)(s.replace(/\\/g, "/")), "gi"),
								);
					this.m(),
						this.i.add(
							this.k.onDidChangeConfiguration((s) => {
								(s.affectsConfiguration(h.$wm) ||
									s.affectsConfiguration(h.$ym) ||
									s.affectsConfiguration(h.$xm)) &&
									this.m();
							}),
						);
				}
				setExperimentProperty(o, f) {
					this.d[o] = f;
				}
				m() {
					let o = (0, c.$Zp)(this.k);
					const f = this.l.enabledTelemetryLevels;
					if (f) {
						this.h = this.sendErrorTelemetry ? f.error : !1;
						const b = f.usage
							? h.TelemetryLevel.USAGE
							: f.error
								? h.TelemetryLevel.ERROR
								: h.TelemetryLevel.NONE;
						o = Math.min(o, b);
					}
					this.g = o;
				}
				get sendErrorTelemetry() {
					return this.h;
				}
				get telemetryLevel() {
					return this.g;
				}
				dispose() {
					this.i.dispose();
				}
				n(o, f, b) {
					this.g < f ||
						((b = (0, i.$yo)(b, this.d)),
						(b = (0, c.$6p)(b, this.j)),
						(b = (0, i.$yo)(b, this.c)),
						this.b.forEach((s) => s.log(o, b)));
				}
				o(o, f, b) {
					this.g < f ||
						((b = (0, i.$yo)(b, this.d)),
						(b = (0, c.$6p)(b, this.j)),
						(b = (0, i.$yo)(b, this.c)),
						this.b.forEach((s) => {
							s.capture(o, b);
						}));
				}
				registerAuthId(o) {
					this.b.forEach((f) => f.registerAuthId(o));
				}
				publicLog(o, f) {
					this.n(o, h.TelemetryLevel.USAGE, f);
				}
				publicLog2(o, f) {
					this.publicLog(o, f);
				}
				publicLogError(o, f) {
					this.h && this.n(o, h.TelemetryLevel.ERROR, f);
				}
				publicLogError2(o, f) {
					this.publicLogError(o, f);
				}
				publicLogCapture(o, f) {
					this.o(o, h.TelemetryLevel.USAGE, f);
				}
			};
			(e.$NJ = n), (e.$NJ = n = Ne([j(1, d.$gj), j(2, u.$Bk)], n));
			function g() {
				const p = (0, C.localize)(2087, null, r.default.nameLong),
					o = (0, C.localize)(
						2088,
						null,
						"https://cursor.com/privacy",
						"https://cursor.com/security",
					),
					f = w.$r ? "" : (0, C.localize)(2089, null);
				return `
${p} ${o} ${f}
`;
			}
			a.$Io
				.as(m.$No.Configuration)
				.registerConfiguration({
					id: h.$vm,
					order: 1,
					type: "object",
					title: "Crash Reporting",
					properties: {
						[h.$wm]: {
							type: "string",
							enum: [h.TelemetryConfiguration.ON, h.TelemetryConfiguration.OFF],
							enumDescriptions: [
								"Send OS-level crash reports.",
								"Disable crash reporting.",
							],
							markdownDescription: g(),
							default: h.TelemetryConfiguration.ON,
							restricted: !0,
							scope: m.ConfigurationScope.APPLICATION,
						},
					},
				});
		},
	),
		