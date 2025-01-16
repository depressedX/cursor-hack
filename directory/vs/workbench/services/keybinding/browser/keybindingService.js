define(
			de[3784],
			he([
				1, 0, 4, 139, 459, 7, 114, 15, 6, 187, 592, 918, 343, 27, 3, 82, 12, 19,
				75, 11, 31, 8, 22, 20, 250, 2735, 39, 390, 43, 939, 1188, 34, 40, 30,
				32, 68, 599, 1819, 53, 175, 87, 1824, 3393, 133,
			]),
			function (
				ce,
				e,
				t,
				i,
				w,
				E,
				C,
				d,
				m,
				r,
				u,
				a,
				h,
				c,
				n,
				g,
				p,
				o,
				f,
				b,
				s,
				l,
				y,
				$,
				v,
				S,
				I,
				T,
				P,
				k,
				L,
				D,
				M,
				N,
				A,
				R,
				O,
				B,
				U,
				z,
				F,
				x,
				H,
				q,
			) {
				"use strict";
				var V;
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$Pvc = void 0),
					(t = mt(t)),
					(i = mt(i)),
					(E = mt(E)),
					(g = mt(g));
				function G(ee, _) {
					return ee
						? typeof ee.command != "string"
							? (_.push(t.localize(12486, null, "command")), !1)
							: ee.key && typeof ee.key != "string"
								? (_.push(t.localize(12487, null, "key")), !1)
								: ee.when && typeof ee.when != "string"
									? (_.push(t.localize(12488, null, "when")), !1)
									: ee.mac && typeof ee.mac != "string"
										? (_.push(t.localize(12489, null, "mac")), !1)
										: ee.linux && typeof ee.linux != "string"
											? (_.push(t.localize(12490, null, "linux")), !1)
											: ee.win && typeof ee.win != "string"
												? (_.push(t.localize(12491, null, "win")), !1)
												: !0
						: (_.push(t.localize(12485, null)), !1);
				}
				const K = {
						type: "object",
						default: { command: "", key: "" },
						properties: {
							command: { description: t.localize(12492, null), type: "string" },
							args: { description: t.localize(12493, null) },
							key: { description: t.localize(12494, null), type: "string" },
							mac: { description: t.localize(12495, null), type: "string" },
							linux: { description: t.localize(12496, null), type: "string" },
							win: { description: t.localize(12497, null), type: "string" },
							when: { description: t.localize(12498, null), type: "string" },
						},
					},
					J = z.$n2.registerExtensionPoint({
						extensionPoint: "keybindings",
						deps: [B.$Mtc],
						jsonSchema: {
							description: t.localize(12499, null),
							oneOf: [K, { type: "array", items: K }],
						},
					}),
					W = [
						c.ScanCode.NumpadDivide,
						c.ScanCode.NumpadMultiply,
						c.ScanCode.NumpadSubtract,
						c.ScanCode.NumpadAdd,
						c.ScanCode.Numpad1,
						c.ScanCode.Numpad2,
						c.ScanCode.Numpad3,
						c.ScanCode.Numpad4,
						c.ScanCode.Numpad5,
						c.ScanCode.Numpad6,
						c.ScanCode.Numpad7,
						c.ScanCode.Numpad8,
						c.ScanCode.Numpad9,
						c.ScanCode.Numpad0,
						c.ScanCode.NumpadDecimal,
					],
					X = new Map();
				X.set(c.ScanCode.Numpad1, c.KeyCode.Digit1),
					X.set(c.ScanCode.Numpad2, c.KeyCode.Digit2),
					X.set(c.ScanCode.Numpad3, c.KeyCode.Digit3),
					X.set(c.ScanCode.Numpad4, c.KeyCode.Digit4),
					X.set(c.ScanCode.Numpad5, c.KeyCode.Digit5),
					X.set(c.ScanCode.Numpad6, c.KeyCode.Digit6),
					X.set(c.ScanCode.Numpad7, c.KeyCode.Digit7),
					X.set(c.ScanCode.Numpad8, c.KeyCode.Digit8),
					X.set(c.ScanCode.Numpad9, c.KeyCode.Digit9),
					X.set(c.ScanCode.Numpad0, c.KeyCode.Digit0);
				let Y = (V = class extends S.$Fvc {
					constructor(_, te, Q, Z, se, re, le, oe, ae, pe, $e) {
						super(_, te, Q, Z, pe),
							(this.S = re),
							(this.U = $e),
							(this.Q = []),
							(this.O = _.createKey("isComposing", !1)),
							(this.R = new ne()),
							this.X(),
							(this.r = this.U.getKeyboardMapper()),
							this.D(
								this.U.onDidChangeKeyboardLayout(() => {
									(this.r = this.U.getKeyboardMapper()), this.cb();
								}),
							),
							(this.P = null),
							(this.C = null),
							(this.N = this.D(new ie(se, ae, oe, pe))),
							this.N.initialize().then(() => {
								this.N.keybindings.length && this.cb();
							}),
							this.D(
								this.N.onDidChange(() => {
									pe.debug("User keybindings changed"), this.cb();
								}),
							),
							J.setHandler((ye) => {
								const ue = [];
								for (const fe of ye)
									this.ib(
										fe.description.identifier,
										fe.description.isBuiltin,
										fe.value,
										fe.collector,
										ue,
									);
								P.$TX.setExtensionKeybindings(ue), this.cb();
							}),
							this.X(),
							this.D(le.onDidRegisterExtensions(() => this.X())),
							this.D(
								m.Event.runAndSubscribe(
									E.onDidRegisterWindow,
									({ window: ye, disposables: ue }) => ue.add(this.W(ye)),
									{ window: f.$Bfb, disposables: this.B },
								),
							),
							this.D(
								i.$Nfb((ye) => {
									if (ye !== f.$Bfb.vscodeWindowId) return;
									const ue = navigator.keyboard;
									w.$Yfb.keyboard !== w.KeyboardSupport.None &&
										(i.$Mfb(f.$Bfb) ? ue?.lock(["Escape"]) : ue?.unlock(),
										(this.C = null),
										this.a.fire());
								}),
							);
					}
					W(_) {
						const te = new n.$Zc();
						return (
							te.add(
								E.$0fb(_, E.$$gb.KEY_DOWN, (Q) => {
									if (this.P) return;
									this.O.set(Q.isComposing);
									const Z = new C.$7fb(Q);
									this.F(`/ Received  keydown event - ${(0, C.$5fb)(Q)}`),
										this.F(`| Converted keydown event - ${(0, C.$6fb)(Z)}`),
										this.J(Z, Z.target) && Z.preventDefault(),
										this.O.set(!1);
								}),
							),
							te.add(
								E.$0fb(_, E.$$gb.KEY_UP, (Q) => {
									this.bb(), this.O.set(Q.isComposing);
									const Z = new C.$7fb(Q);
									this.L(Z, Z.target) && Z.preventDefault(), this.O.set(!1);
								}),
							),
							te
						);
					}
					registerSchemaContribution(_) {
						this.Q.push(_),
							_.onDidChange && this.D(_.onDidChange(() => this.X())),
							this.X();
					}
					X() {
						this.R.updateSchema(this.Q.flatMap((_) => _.getSchemaAdditions()));
					}
					Y(_) {
						return (
							u.$5ob.toLabel(p.OS, _.chords, (te) =>
								te instanceof h.$ts
									? c.KeyCodeUtils.toString(te.keyCode)
									: c.$ls.toString(te.scanCode),
							) || "[null]"
						);
					}
					Z(_) {
						return _.getDispatchChords()
							.map((te) => te || "[null]")
							.join(" ");
					}
					$(_, te, Q) {
						const se = `${te.padStart(35, " ")} => `;
						if (Q.length === 0) {
							_.push(`${se}${"[NO BINDING]".padStart(35, " ")}`);
							return;
						}
						const re = se.length,
							le = !0;
						for (const oe of Q)
							le
								? _.push(`${se}${this.Z(oe).padStart(35, " ")}`)
								: _.push(`${" ".repeat(re)}${this.Z(oe).padStart(35, " ")}`);
					}
					ab() {
						const _ = new Set(),
							te = [];
						te.push("Default Resolved Keybindings (unique only):");
						for (const Q of P.$TX.getDefaultKeybindings()) {
							if (!Q.keybinding) continue;
							const Z = this.Y(Q.keybinding);
							if (_.has(Z)) continue;
							_.add(Z);
							const se = this.r.resolveKeybinding(Q.keybinding);
							this.$(te, Z, se);
						}
						te.push("User Resolved Keybindings (unique only):");
						for (const Q of this.N.keybindings) {
							if (!Q.keybinding) continue;
							const Z =
								Q._sourceKey ??
								"Impossible: missing source key, but has keybinding";
							if (_.has(Z)) continue;
							_.add(Z);
							const se = this.r.resolveKeybinding(Q.keybinding);
							this.$(te, Z, se);
						}
						return te.join(`
`);
					}
					_dumpDebugInfo() {
						const _ = JSON.stringify(
								this.U.getCurrentKeyboardLayout(),
								null,
								"	",
							),
							te = this.r.dumpDebugInfo(),
							Q = this.ab(),
							Z = JSON.stringify(this.U.getRawKeyboardMapping(), null, "	");
						return `Layout info:
${_}

${Q}

${te}

Raw mapping:
${Z}`;
					}
					_dumpDebugInfoJSON() {
						const _ = {
							layout: this.U.getCurrentKeyboardLayout(),
							rawMapping: this.U.getRawKeyboardMapping(),
						};
						return JSON.stringify(_, null, "	");
					}
					enableKeybindingHoldMode(_) {
						if (this.m !== _) return;
						this.P = new d.$0h();
						const te = E.$dhb(E.getWindow(void 0)),
							Q = te.onDidBlur(() => this.bb());
						return (
							this.P.p.finally(() => {
								Q.dispose(), te.dispose();
							}),
							this.F(`+ Enabled hold-mode for ${_}.`),
							this.P.p
						);
					}
					bb() {
						this.P && (this.P?.complete(), (this.P = null));
					}
					customKeybindingsCount() {
						return this.N.keybindings.length;
					}
					cb() {
						(this.C = null), this.a.fire();
					}
					y() {
						if (!this.C) {
							const _ = this.fb(P.$TX.getDefaultKeybindings(), !0),
								te = this.gb(this.N.keybindings, !1);
							this.C = new T.$tZ(_, te, (Q) => this.F(Q));
						}
						return this.C;
					}
					z() {
						return this.S.hasFocus;
					}
					fb(_, te) {
						const Q = [];
						let Z = 0;
						for (const se of _) {
							const re = se.when || void 0,
								le = se.keybinding;
							if (!le)
								Q[Z++] = new k.$qZ(
									void 0,
									se.command,
									se.commandArgs,
									re,
									te,
									se.extensionId,
									se.isBuiltinExtension,
								);
							else {
								if (this.hb(le)) continue;
								const oe = this.r.resolveKeybinding(le);
								for (let ae = oe.length - 1; ae >= 0; ae--) {
									const pe = oe[ae];
									Q[Z++] = new k.$qZ(
										pe,
										se.command,
										se.commandArgs,
										re,
										te,
										se.extensionId,
										se.isBuiltinExtension,
									);
								}
							}
						}
						return Q;
					}
					gb(_, te) {
						const Q = [];
						let Z = 0;
						for (const se of _) {
							const re = se.when || void 0;
							if (!se.keybinding)
								Q[Z++] = new k.$qZ(
									void 0,
									se.command,
									se.commandArgs,
									re,
									te,
									null,
									!1,
								);
							else {
								const le = this.r.resolveKeybinding(se.keybinding);
								for (const oe of le)
									Q[Z++] = new k.$qZ(
										oe,
										se.command,
										se.commandArgs,
										re,
										te,
										null,
										!1,
									);
							}
						}
						return Q;
					}
					hb(_) {
						if (
							w.$Yfb.keyboard === w.KeyboardSupport.Always ||
							(w.$Yfb.keyboard === w.KeyboardSupport.FullScreen &&
								i.$Mfb(f.$Bfb))
						)
							return !1;
						for (const te of _.chords) {
							if (!te.metaKey && !te.altKey && !te.ctrlKey && !te.shiftKey)
								continue;
							const Q = c.KeyMod.CtrlCmd | c.KeyMod.Alt | c.KeyMod.Shift;
							let Z = 0;
							if (
								(te.metaKey && (Z |= c.KeyMod.CtrlCmd),
								te.shiftKey && (Z |= c.KeyMod.Shift),
								te.altKey && (Z |= c.KeyMod.Alt),
								te.ctrlKey &&
									p.OS === p.OperatingSystem.Macintosh &&
									(Z |= c.KeyMod.WinCtrl),
								((Z & Q) === (c.KeyMod.CtrlCmd | c.KeyMod.Alt) &&
									((te instanceof h.$us &&
										(te.scanCode === c.ScanCode.ArrowLeft ||
											te.scanCode === c.ScanCode.ArrowRight)) ||
										(te instanceof h.$ts &&
											(te.keyCode === c.KeyCode.LeftArrow ||
												te.keyCode === c.KeyCode.RightArrow)))) ||
									((Z & Q) === c.KeyMod.CtrlCmd &&
										((te instanceof h.$us &&
											te.scanCode >= c.ScanCode.Digit1 &&
											te.scanCode <= c.ScanCode.Digit0) ||
											(te instanceof h.$ts &&
												te.keyCode >= c.KeyCode.Digit0 &&
												te.keyCode <= c.KeyCode.Digit9))))
							)
								return !0;
						}
						return !1;
					}
					resolveKeybinding(_) {
						return this.r.resolveKeybinding(_);
					}
					resolveKeyboardEvent(_) {
						return (
							this.U.validateCurrentKeyboardMapping(_),
							this.r.resolveKeyboardEvent(_)
						);
					}
					resolveUserBinding(_) {
						const te = a.$Xpb.parseKeybinding(_);
						return te ? this.r.resolveKeybinding(te) : [];
					}
					ib(_, te, Q, Z, se) {
						if (Array.isArray(Q))
							for (let re = 0, le = Q.length; re < le; re++)
								this.jb(_, te, re + 1, Q[re], Z, se);
						else this.jb(_, te, 1, Q, Z, se);
					}
					jb(_, te, Q, Z, se, re) {
						const le = [];
						if (G(Z, le)) {
							const oe = this.mb(_, te, Q++, Z);
							oe && re.push(oe);
						}
						le.length > 0 &&
							se.error(
								t.localize(
									12500,
									null,
									J.name,
									le.join(`
`),
								),
							);
					}
					static lb(_, te, Q, Z) {
						if (p.OS === p.OperatingSystem.Windows && Z) {
							if (Z) return Z;
						} else if (p.OS === p.OperatingSystem.Macintosh) {
							if (te) return te;
						} else if (Q) return Q;
						return _;
					}
					mb(_, te, Q, Z) {
						const {
								command: se,
								args: re,
								when: le,
								key: oe,
								mac: ae,
								linux: pe,
								win: $e,
							} = Z,
							ye = V.lb(oe, ae, pe, $e);
						if (!ye) return;
						let ue;
						te
							? (ue = P.KeybindingWeight.BuiltinExtension + Q)
							: (ue = P.KeybindingWeight.ExternalExtension + Q);
						const fe = b.$ZX.getCommand(se),
							me = fe && fe.precondition;
						let ve;
						return (
							le && me
								? (ve = l.$Kj.and(me, l.$Kj.deserialize(le)))
								: le
									? (ve = l.$Kj.deserialize(le))
									: me && (ve = me),
							{
								id: se,
								args: re,
								when: ve,
								weight: ue,
								keybinding: a.$Xpb.parseKeybinding(ye),
								extensionId: _.value,
								isBuiltinExtension: te,
							}
						);
					}
					getDefaultKeybindingsContent() {
						const _ = this.y(),
							te = _.getDefaultKeybindings(),
							Q = _.getDefaultBoundCommands();
						return (
							V.nb(te) +
							`

` +
							V.ob(Q)
						);
					}
					static nb(_) {
						const te = new H.$Ovc();
						te.writeLine("[");
						const Q = _.length - 1;
						return (
							_.forEach((Z, se) => {
								H.$Nvc.writeKeybindingItem(te, Z),
									se !== Q ? te.writeLine(",") : te.writeLine();
							}),
							te.writeLine("]"),
							te.toString()
						);
					}
					static ob(_) {
						const Q = (0, x.$pvc)(_)
							.sort()
							.join(`
// - `);
						return (
							"// " +
							t.localize(12501, null) +
							`
// - ` +
							Q
						);
					}
					mightProducePrintableCharacter(_) {
						if (_.ctrlKey || _.metaKey || _.altKey) return !1;
						const te = c.$ls.toEnum(_.code);
						if (W.indexOf(te) !== -1)
							return !!(
								_.keyCode === c.$ms[te] ||
								(p.$m && _.keyCode === X.get(te))
							);
						if (c.$ms[te] !== -1) return !1;
						const Z = this.U.getRawKeyboardMapping();
						if (!Z) return !1;
						const se = Z[_.code];
						return !(!se || !se.value || /\s/.test(se.value));
					}
				});
				(e.$Pvc = Y),
					(e.$Pvc =
						Y =
						V =
							Ne(
								[
									j(0, l.$6j),
									j(1, s.$ek),
									j(2, A.$km),
									j(3, M.$4N),
									j(4, q.$P8),
									j(5, F.$asb),
									j(6, U.$q2),
									j(7, y.$ll),
									j(8, R.$Vl),
									j(9, D.$ik),
									j(10, L.$Hvc),
								],
								Y,
							));
				class ie extends n.$1c {
					get keybindings() {
						return this.b;
					}
					constructor(_, te, Q, Z) {
						super(),
							(this.h = _),
							(this.j = te),
							(this.m = Q),
							(this.a = []),
							(this.b = []),
							(this.f = this.D(new n.$Zc())),
							(this.g = this.D(new m.$re())),
							(this.onDidChange = this.g.event),
							this.q(),
							(this.c = this.D(
								new d.$Yh(
									() =>
										this.r().then((se) => {
											se && this.g.fire();
										}),
									50,
								),
							)),
							this.D(
								m.Event.filter(this.m.onDidFilesChange, (se) =>
									se.contains(this.h.currentProfile.keybindingsResource),
								)(() => {
									Z.debug("Keybindings file changed"), this.c.schedule();
								}),
							),
							this.D(
								this.m.onDidRunOperation((se) => {
									se.operation === y.FileOperation.WRITE &&
										se.resource.toString() ===
											this.h.currentProfile.keybindingsResource.toString() &&
										(Z.debug("Keybindings file written"), this.c.schedule());
								}),
							),
							this.D(
								_.onDidChangeCurrentProfile((se) => {
									this.j.extUri.isEqual(
										se.previous.keybindingsResource,
										se.profile.keybindingsResource,
									) || se.join(this.n());
								}),
							);
					}
					async n() {
						this.q(), this.c.schedule();
					}
					q() {
						this.f.clear(),
							this.f.add(
								this.m.watch(
									(0, o.$mh)(this.h.currentProfile.keybindingsResource),
								),
							),
							this.f.add(
								this.m.watch(this.h.currentProfile.keybindingsResource),
							);
					}
					async initialize() {
						await this.r();
					}
					async r() {
						const _ = await this.s();
						return g.$zo(this.a, _)
							? !1
							: ((this.a = _),
								(this.b = this.a.map((te) =>
									H.$Nvc.readUserKeybindingItem(te),
								)),
								!0);
					}
					async s() {
						try {
							const _ = await this.m.readFile(
									this.h.currentProfile.keybindingsResource,
								),
								te = (0, r.$do)(_.value.toString());
							return Array.isArray(te)
								? te.filter((Q) => Q && typeof Q == "object")
								: [];
						} catch {
							return [];
						}
					}
				}
				class ne {
					static {
						this.a = "vscode://schemas/keybindings";
					}
					constructor() {
						(this.b = []),
							(this.c = []),
							(this.d = []),
							(this.f = []),
							(this.g = {
								id: ne.a,
								type: "array",
								title: t.localize(12502, null),
								allowTrailingCommas: !0,
								allowComments: !0,
								definitions: {
									editorGroupsSchema: {
										type: "array",
										items: {
											type: "object",
											properties: {
												groups: {
													$ref: "#/definitions/editorGroupsSchema",
													default: [{}, {}],
												},
												size: { type: "number", default: 0.5 },
											},
										},
									},
									commandNames: {
										type: "string",
										enum: this.c,
										enumDescriptions: this.f,
										description: t.localize(12503, null),
									},
									commandType: {
										anyOf: [
											{ $ref: "#/definitions/commandNames" },
											{
												type: "string",
												enum: this.d,
												enumDescriptions: this.f,
												description: t.localize(12504, null),
											},
											{ type: "string" },
										],
									},
									commandsSchemas: { allOf: this.b },
								},
								items: {
									required: ["key"],
									type: "object",
									defaultSnippets: [
										{ body: { key: "$1", command: "$2", when: "$3" } },
									],
									properties: {
										key: {
											type: "string",
											description: t.localize(12505, null),
										},
										command: {
											anyOf: [
												{
													if: { type: "array" },
													then: {
														not: { type: "array" },
														errorMessage: t.localize(12506, null, "string"),
													},
													else: { $ref: "#/definitions/commandType" },
												},
												{ $ref: "#/definitions/commandType" },
											],
										},
										when: {
											type: "string",
											description: t.localize(12507, null),
										},
										args: { description: t.localize(12508, null) },
									},
									$ref: "#/definitions/commandsSchemas",
								},
							}),
							(this.h = N.$Io.as(v.$Jo.JSONContribution)),
							this.h.registerSchema(ne.a, this.g);
					}
					updateSchema(_) {
						(this.b.length = 0),
							(this.c.length = 0),
							(this.d.length = 0),
							(this.f.length = 0);
						const te = new Set(),
							Q = (re, le) => {
								/^_/.test(re) ||
									te.has(re) ||
									(te.add(re),
									this.c.push(re),
									this.f.push((0, O.$gk)(le) ? le.value : le),
									this.d.push(`-${re}`));
							},
							Z = s.$fk.getCommands();
						for (const [re, le] of Z) {
							const oe = le.metadata;
							if (
								(Q(re, oe?.description),
								!oe || !oe.args || oe.args.length !== 1 || !oe.args[0].schema)
							)
								continue;
							const ae = oe.args[0].schema,
								pe =
									typeof oe.args[0].isOptional < "u"
										? !oe.args[0].isOptional
										: Array.isArray(ae.required) && ae.required.length > 0,
								$e = {
									if: {
										required: ["command"],
										properties: { command: { const: re } },
									},
									then: {
										required: [].concat(pe ? ["args"] : []),
										properties: { args: ae },
									},
								};
							this.b.push($e);
						}
						const se = b.$ZX.getCommands();
						for (const re of se.keys()) Q(re);
						this.b.push(..._), this.h.notifySchemaChanged(ne.a);
					}
				}
				(0, $.$lK)(I.$uZ, Y, $.InstantiationType.Eager);
			},
		),
		