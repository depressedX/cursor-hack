import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../platform/instantiation/common/instantiation.js';
import '../../../../base/common/lifecycle.js';
import '../../../../platform/instantiation/common/extensions.js';
import '../../../../platform/workspace/common/workspace.js';
import '../../../../base/common/uri.js';
import '../../../../../proto/aiserver/v1/chat_pb.js';
import '../../../../base/common/event.js';
import '../../lifecycle/common/lifecycle.js';
define(
			de[359],
			he([1, 0, 5, 3, 20, 25, 9, 126, 6, 52]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$$Db = void 0),
					(e.$$Db = (0, t.$Mi)("gitContextService"));
				let u = class extends i.$1c {
					constructor(h, c) {
						super(),
							(this.b = h),
							(this.f = c),
							(this.a = void 0),
							(this._onDidRunGitStatus = this.D(new m.$re())),
							(this.onDidRunGitStatus = this._onDidRunGitStatus.event);
					}
					async cleanupOldWorktrees() {
						this.a && (await this.a.cleanupOldWorktrees());
					}
					async waitForGitContextProvider() {
						for (; !this.a; ) await new Promise((h) => setTimeout(h, 500));
					}
					getGitFileBlameWithAbsolutePath(h, c) {
						throw new Error("Method not implemented.");
					}
					hasGitContextProvider() {
						return this.a !== void 0;
					}
					registerGitContextProvider(h) {
						this.a = h;
					}
					unregisterGitContextProvider() {
						this.a = void 0;
					}
					async searchAllCommits(h) {
						if (!this.a)
							throw new Error("No commit search provider registered");
						return this.a.getCommits(h);
					}
					async getFullCommit(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return this.a.getFullCommit(h);
					}
					async getFullCommitProto(h) {
						const c = await this.getFullCommit(h);
						if (c)
							return new d.$$A({
								sha: c.sha,
								message: c.message,
								description: c.description,
								diff: c.diff.map((n) => ({
									from: n.from,
									to: n.to,
									chunks: n.chunks.map((g) => ({
										content: g.content,
										lines: g.changes.map((p) => p.content),
									})),
								})),
								author: c.author,
								date: c.date,
							});
					}
					async searchAllPrs(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getPullRequests(h);
					}
					async getFullPr(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a?.getFullPullRequest(h);
					}
					async getBranchDiff(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getBranchDiff({ ...h, cwd: h?.cwd?.fsPath });
					}
					async getGitRoot(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitRoot(h);
					}
					async getDiffRaw() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getDiffRaw();
					}
					async getLastCommit() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getLastCommit();
					}
					async getLastCommits(h, c = 0) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getLastCommits(h, c);
					}
					async getGitDiff() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getCurrentDiff();
					}
					async getGitLineBlameWithRelativePath(h, c, n) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitLineBlame(h, c, n);
					}
					async getGitLineBlameWithAbsolutePath(h, c, n) {
						if (!this.a) throw new Error("No full commit provider registered");
						const g = this.b.asRelativePath(C.URI.file(h));
						return this.getGitLineBlameWithRelativePath(g, c, n);
					}
					async getGitFileBlameWithRelativePath(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitFileBlame(h, c);
					}
					async getGitUpstreamURL() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitUpstreamURL();
					}
					async getFileContentAtRef(h, c, n) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getFileContentAtRef(h, c, n);
					}
					async getCommitRawByCommitHash(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getCommitRawByCommitHash(h, c);
					}
					async createWorktree(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.createWorktree(h);
					}
					async syncWorktreeToBranch(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.syncWorktreeToBranch(h, c);
					}
					async syncBranchToWorktree(h, c) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.syncBranchToWorktree(h, c);
					}
					async removeWorktree(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.removeWorktree(h);
					}
					async listAllWorktrees() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.listAllWorktrees();
					}
					async getFilenamesInCommit(h) {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getFilenamesInCommit(h);
					}
					async getCurrentBranch() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getCurrentBranch();
					}
					async getDefaultBranch() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getDefaultBranch();
					}
					async getGitUser() {
						if (!this.a) throw new Error("No full commit provider registered");
						return await this.a.getGitUser();
					}
				};
				(u = Ne([j(0, E.$Vi), j(1, r.$n6)], u)),
					(0, w.$lK)(e.$$Db, u, w.InstantiationType.Delayed);
			},
		),
		