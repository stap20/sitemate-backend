import { Router } from "express";
import IssueController from "../controllers/issueController";

const router: Router = Router();

router.post("/", IssueController.createIssue.bind(IssueController));

router.get("/", IssueController.getAllIssues.bind(IssueController));

router.put("/:id", IssueController.updateIssue.bind(IssueController));

router.delete("/:id", IssueController.deleteIssue.bind(IssueController));

export default router;
