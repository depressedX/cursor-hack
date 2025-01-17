import '../../../require.js';
import '../../../exports.js';
import './repository_pb.js';
import '../../../external/bufbuild/protobuf.js';
define(de[1486], he([1, 0, 272, 86]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$O_ = void 0),
				(e.$O_ = {
					typeName: "aiserver.v1.RepositoryService",
					methods: {
						fastRepoInitHandshake: {
							name: "FastRepoInitHandshake",
							I: t.$bu,
							O: t.$cu,
							kind: i.MethodKind.Unary,
						},
						syncMerkleSubtree: {
							name: "SyncMerkleSubtree",
							I: t.$du,
							O: t.$eu,
							kind: i.MethodKind.Unary,
						},
						fastUpdateFile: {
							name: "FastUpdateFile",
							I: t.$gu,
							O: t.$iu,
							kind: i.MethodKind.Unary,
						},
						searchRepositoryV2: {
							name: "SearchRepositoryV2",
							I: t.$Su,
							O: t.$Vu,
							kind: i.MethodKind.Unary,
						},
						removeRepositoryV2: {
							name: "RemoveRepositoryV2",
							I: t.$Ou,
							O: t.$Pu,
							kind: i.MethodKind.Unary,
						},
						semSearchFast: {
							name: "SemSearchFast",
							I: t.$Wu,
							O: t.$Zu,
							kind: i.MethodKind.ServerStreaming,
						},
						semSearch: {
							name: "SemSearch",
							I: t.$Wu,
							O: t.$Zu,
							kind: i.MethodKind.ServerStreaming,
						},
						ensureIndexCreated: {
							name: "EnsureIndexCreated",
							I: t.$$t,
							O: t.$_t,
							kind: i.MethodKind.Unary,
						},
						getHighLevelFolderDescription: {
							name: "GetHighLevelFolderDescription",
							I: t.$8t,
							O: t.$0t,
							kind: i.MethodKind.Unary,
						},
						getEmbeddings: {
							name: "GetEmbeddings",
							I: t.$pu,
							O: t.$qu,
							kind: i.MethodKind.Unary,
						},
						getUploadLimits: {
							name: "GetUploadLimits",
							I: t.$ju,
							O: t.$ku,
							kind: i.MethodKind.Unary,
						},
						getNumFilesToSend: {
							name: "GetNumFilesToSend",
							I: t.$lu,
							O: t.$mu,
							kind: i.MethodKind.Unary,
						},
						getAvailableChunkingStrategies: {
							name: "GetAvailableChunkingStrategies",
							I: t.$nu,
							O: t.$ou,
							kind: i.MethodKind.Unary,
						},
						getLineNumberClassifications: {
							name: "GetLineNumberClassifications",
							I: t.$rv,
							O: t.$sv,
							kind: i.MethodKind.ServerStreaming,
						},
					},
				});
		}),
		