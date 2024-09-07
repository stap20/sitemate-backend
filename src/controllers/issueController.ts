import { Request, Response } from "express";
import Logger from "../utils/logger"; // Adjust path as necessary

interface Issue {
  id: number;
  title: string;
  description: string;
}

class IssueController {
  private issues: Issue[] = [
    { id: 1, title: "issue 1", description: "issue 1" },
    { id: 2, title: "issue 2", description: "issue 2" },
  ];

  public createIssue(req: Request, res: Response): void {
    try {
      const newIssue: Issue = req.body;

      if (!newIssue.title || !newIssue.description) {
        throw new Error("Title and description are required.");
      }

      const issueWithId = { ...newIssue, id: this.issues.length + 1 };
      this.issues.push(issueWithId);

      Logger.info(`Issue Created: ${JSON.stringify(issueWithId)}`);
      res.status(201).json(issueWithId);
    } catch (error: any) {
      Logger.error(`Error Creating Issue: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  public getAllIssues(req: Request, res: Response): void {
    try {
      Logger.info("Fetching all issues");
      res.json(this.issues);
    } catch (error: any) {
      Logger.error(`Error Fetching Issues: ${error.message}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  public updateIssue(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const updatedIssue: Issue = req.body;

      if (!updatedIssue.title || !updatedIssue.description) {
        throw new Error("Title and description are required.");
      }

      const issueId = parseInt(id);
      const issueIndex = this.issues.findIndex((issue) => issue.id === issueId);

      if (issueIndex === -1) {
        throw new Error("Issue not found.");
      }

      this.issues[issueIndex] = updatedIssue;

      Logger.info(`Issue Updated: ${JSON.stringify(updatedIssue)}`);
      res.json(updatedIssue);
    } catch (error: any) {
      Logger.error(`Error Updating Issue: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }

  public deleteIssue(req: Request, res: Response): void {
    try {
      const { id } = req.params;
      const issueId = parseInt(id);

      const issueIndex = this.issues.findIndex((issue) => issue.id === issueId);

      if (issueIndex === -1) {
        throw new Error("Issue not found.");
      }

      this.issues.splice(issueIndex, 1);

      Logger.info(`Issue Deleted with ID: ${issueId}`);
      res.json({ message: `Issue with ID ${issueId} deleted` });
    } catch (error: any) {
      Logger.error(`Error Deleting Issue: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }
}

export default new IssueController();
