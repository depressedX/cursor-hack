import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/objects.js';
import '../../../../nls.js';
import '../../../../platform/actions/common/actions.js';
import '../../../../platform/commands/common/commands.js';
import '../../../../platform/log/common/log.js';
import '../../../../platform/notification/common/notification.js';
define(
			de[3027],
			he([1, 0, 82, 4, 11, 31, 34, 40]),
			function (ce /*require*/,
 e /*exports*/,
 t /*objects*/,
 i /*nls*/,
 w /*actions*/,
 E /*commands*/,
 C /*log*/,
 d /*notification*/) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (i = mt(i));
				class m extends w.$3X {
					constructor() {
						super({
							id: "runCommands",
							title: i.localize2(4989, "Run Commands"),
							f1: !1,
							metadata: {
								description: i.localize(4985, null),
								args: [
									{
										name: "args",
										schema: {
											type: "object",
											required: ["commands"],
											properties: {
												commands: {
													type: "array",
													description: i.localize(4986, null),
													items: {
														anyOf: [
															{
																$ref: "vscode://schemas/keybindings#/definitions/commandNames",
															},
															{ type: "string" },
															{
																type: "object",
																required: ["command"],
																properties: {
																	command: {
																		anyOf: [
																			{
																				$ref: "vscode://schemas/keybindings#/definitions/commandNames",
																			},
																			{ type: "string" },
																		],
																	},
																},
																$ref: "vscode://schemas/keybindings#/definitions/commandsSchemas",
															},
														],
													},
												},
											},
										},
									},
								],
							},
						});
					}
					async run(u, a) {
						const h = u.get(d.$4N);
						if (!this.a(a)) {
							h.error(i.localize(4987, null));
							return;
						}
						if (a.commands.length === 0) {
							h.warn(i.localize(4988, null));
							return;
						}
						const c = u.get(E.$ek),
							n = u.get(C.$ik);
						let g = 0;
						try {
							for (; g < a.commands.length; ++g) {
								const p = a.commands[g];
								n.debug(
									`runCommands: executing ${g}-th command: ${(0, t.$Ao)(p)}`,
								),
									await this.b(c, p),
									n.debug(`runCommands: executed ${g}-th command`);
							}
						} catch (p) {
							n.debug(
								`runCommands: executing ${g}-th command resulted in an error: ${p instanceof Error ? p.message : ((0, t.$Ao))(p)}`,
							),
								h.error(p);
						}
					}
					a(u) {
						if (
							!u ||
							typeof u != "object" ||
							!("commands" in u) ||
							!Array.isArray(u.commands)
						)
							return !1;
						for (const a of u.commands)
							if (
								typeof a != "string" &&
								!(typeof a == "object" && typeof a.command == "string")
							)
								return !1;
						return !0;
					}
					b(u, a) {
						let h, c;
						return (
							typeof a == "string" ? (h = a) : ((h = a.command), (c = a.args)),
							c === void 0
								? u.executeCommand(h)
								: Array.isArray(c)
									? u.executeCommand(h, ...c)
									: u.executeCommand(h, c)
						);
					}
				}
				(0, w.$4X)(m);
			},
		)
