import '../../../require.js';
import '../../../exports.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1476], he([1, 0, 86]), function (ce /*require*/,
 e /*exports*/,
 t /*protobuf*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.InterfaceAgentStatus_Status = e.$BD = e.$AD = void 0);
			class i extends t.Message {
				constructor(d) {
					super(),
						(this.interfaceRelativeWorkspacePath = ""),
						(this.interfaceLines = []),
						(this.testLines = []),
						(this.implementationLines = []),
						(this.language = ""),
						(this.testingFramework = ""),
						t.proto3.util.initPartial(d, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.InterfaceAgentClientState";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 3,
							name: "interface_relative_workspace_path",
							kind: "scalar",
							T: 9,
						},
						{
							no: 4,
							name: "interface_lines",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{
							no: 5,
							name: "test_relative_workspace_path",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{ no: 10, name: "test_lines", kind: "scalar", T: 9, repeated: !0 },
						{
							no: 6,
							name: "implementation_relative_workspace_path",
							kind: "scalar",
							T: 9,
							opt: !0,
						},
						{
							no: 7,
							name: "implementation_lines",
							kind: "scalar",
							T: 9,
							repeated: !0,
						},
						{ no: 8, name: "language", kind: "scalar", T: 9 },
						{ no: 9, name: "testing_framework", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(d, m) {
					return new i().fromBinary(d, m);
				}
				static fromJson(d, m) {
					return new i().fromJson(d, m);
				}
				static fromJsonString(d, m) {
					return new i().fromJsonString(d, m);
				}
				static equals(d, m) {
					return t.proto3.util.equals(i, d, m);
				}
			}
			e.$AD = i;
			class w extends t.Message {
				constructor(d) {
					super(),
						(this.validateConfiguration = E.UNSPECIFIED),
						(this.stubNewFunction = E.UNSPECIFIED),
						(this.verifySpec = E.UNSPECIFIED),
						(this.writeTestPlan = E.UNSPECIFIED),
						(this.writeTests = E.UNSPECIFIED),
						(this.writeImplementation = E.UNSPECIFIED),
						(this.implementNewFunction = E.UNSPECIFIED),
						(this.runTests = E.UNSPECIFIED),
						(this.validateConfigurationMessage = ""),
						(this.stubNewFunctionMessage = ""),
						(this.verifySpecMessage = ""),
						(this.writeTestPlanMessage = ""),
						(this.writeTestsMessage = ""),
						(this.writeImplementationMessage = ""),
						(this.implementNewFunctionMessage = ""),
						(this.runTestsMessage = ""),
						t.proto3.util.initPartial(d, this);
				}
				static {
					this.runtime = t.proto3;
				}
				static {
					this.typeName = "aiserver.v1.InterfaceAgentStatus";
				}
				static {
					this.fields = t.proto3.util.newFieldList(() => [
						{
							no: 1,
							name: "validate_configuration",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 2,
							name: "stub_new_function",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 3,
							name: "verify_spec",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 15,
							name: "write_test_plan",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 4,
							name: "write_tests",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 5,
							name: "write_implementation",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 6,
							name: "implement_new_function",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 7,
							name: "run_tests",
							kind: "enum",
							T: t.proto3.getEnumType(E),
						},
						{
							no: 8,
							name: "validate_configuration_message",
							kind: "scalar",
							T: 9,
						},
						{ no: 9, name: "stub_new_function_message", kind: "scalar", T: 9 },
						{ no: 10, name: "verify_spec_message", kind: "scalar", T: 9 },
						{ no: 16, name: "write_test_plan_message", kind: "scalar", T: 9 },
						{ no: 11, name: "write_tests_message", kind: "scalar", T: 9 },
						{
							no: 12,
							name: "write_implementation_message",
							kind: "scalar",
							T: 9,
						},
						{
							no: 13,
							name: "implement_new_function_message",
							kind: "scalar",
							T: 9,
						},
						{ no: 14, name: "run_tests_message", kind: "scalar", T: 9 },
					]);
				}
				static fromBinary(d, m) {
					return new w().fromBinary(d, m);
				}
				static fromJson(d, m) {
					return new w().fromJson(d, m);
				}
				static fromJsonString(d, m) {
					return new w().fromJsonString(d, m);
				}
				static equals(d, m) {
					return t.proto3.util.equals(w, d, m);
				}
			}
			e.$BD = w;
			var E;
			(function (C) {
				(C[(C.UNSPECIFIED = 0)] = "UNSPECIFIED"),
					(C[(C.WAITING = 1)] = "WAITING"),
					(C[(C.RUNNING = 2)] = "RUNNING"),
					(C[(C.SUCCESS = 3)] = "SUCCESS"),
					(C[(C.FAILURE = 4)] = "FAILURE");
			})(E || (e.InterfaceAgentStatus_Status = E = {})),
				t.proto3.util.setEnumType(
					E,
					"aiserver.v1.InterfaceAgentStatus.Status",
					[
						{ no: 0, name: "STATUS_UNSPECIFIED" },
						{ no: 1, name: "STATUS_WAITING" },
						{ no: 2, name: "STATUS_RUNNING" },
						{ no: 3, name: "STATUS_SUCCESS" },
						{ no: 4, name: "STATUS_FAILURE" },
					],
				);
		})
