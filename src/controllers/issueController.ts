import { Request, Response } from "express";

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
    const newIssue: Issue = req.body;
    this.issues.push({ ...newIssue, id: this.issues.length + 1 });
    console.log("Issue Created:", newIssue);
    res.status(201).json(newIssue);
  }

  public getAllIssues(req: Request, res: Response): void {
    res.send(this.issues);
  }

  public updateIssue(req: Request, res: Response): void {
    const { id } = req.params;
    const updatedIssue: Issue = req.body;
    this.issues = this.issues.map((issue) =>
      issue.id === parseInt(id) ? updatedIssue : issue
    );
    console.log("Issue Updated:", updatedIssue);
    res.send(updatedIssue);
  }

  public deleteIssue(req: Request, res: Response): void {
    const { id } = req.params;
    this.issues = this.issues.filter((issue) => issue.id !== parseInt(id));
    console.log("Issue Deleted with ID:", id);
    res.send({ message: `Issue with ID ${id} deleted` });
  }
}

export default new IssueController();
