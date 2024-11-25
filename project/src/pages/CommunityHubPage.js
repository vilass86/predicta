import React, { useState } from "react";
import "./CommunityHubPage.css";

const CommunityHubPage = () => {
  const [threads, setThreads] = useState([
    {
      id: 1,
      title: "Will Bitcoin cross $100,000 in 2025?",
      author: "CryptoFan123",
      comments: [
        { id: 1, user: "JohnDoe", text: "I think it will happen soon!" },
        { id: 2, user: "JaneSmith", text: "I doubt it, the market is too volatile." },
      ],
    },
    {
      id: 2,
      title: "Best EPL team of all time?",
      author: "SportsGuru",
      comments: [{ id: 1, user: "Fanatic", text: "Liverpool, hands down!" }],
    },
  ]);

  const [selectedThread, setSelectedThread] = useState(null);
  const [newDiscussionTitle, setNewDiscussionTitle] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleThreadClick = (threadId) => {
    const thread = threads.find((t) => t.id === threadId);
    setSelectedThread(thread);
  };

  const handleNewDiscussion = () => {
    if (newDiscussionTitle.trim()) {
      setThreads([
        ...threads,
        { id: threads.length + 1, title: newDiscussionTitle, author: "You", comments: [] },
      ]);
      setNewDiscussionTitle("");
    }
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const updatedThreads = threads.map((thread) =>
        thread.id === selectedThread.id
          ? {
              ...thread,
              comments: [
                ...thread.comments,
                { id: thread.comments.length + 1, user: "You", text: newComment },
              ],
            }
          : thread
      );
      setThreads(updatedThreads);
      setNewComment("");
    }
  };

  return (
    <div className="community-hub">
      <h1 className="page-title">Community Hub</h1>

      <div className="hub-container">
        {/* Discussion Threads */}
        <div className="thread-list">
          <h2>Discussions</h2>
          {threads.map((thread) => (
            <div
              key={thread.id}
              className="thread-item"
              onClick={() => handleThreadClick(thread.id)}
            >
              <h3>{thread.title}</h3>
              <p>Started by: {thread.author}</p>
              <p>{thread.comments.length} comments</p>
            </div>
          ))}

          {/* Start a New Discussion */}
          <div className="new-discussion">
            <textarea
              value={newDiscussionTitle}
              onChange={(e) => setNewDiscussionTitle(e.target.value)}
              placeholder="Start a new discussion..."
            ></textarea>
            <button onClick={handleNewDiscussion} className="start-discussion-button">
              Start Discussion
            </button>
          </div>
        </div>

        {/* Selected Thread */}
        <div className="thread-details">
          {selectedThread ? (
            <>
              <h2>{selectedThread.title}</h2>
              <p>Started by: {selectedThread.author}</p>
              <div className="comments-section">
                {selectedThread.comments.map((comment) => (
                  <div key={comment.id} className="comment">
                    <p>
                      <strong>{comment.user}:</strong> {comment.text}
                    </p>
                  </div>
                ))}

                {/* Add a New Comment */}
                <div className="add-comment">
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                  ></textarea>
                  <button onClick={handleAddComment} className="add-comment-button">
                    Post Comment
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>Select a thread to view details or start a new discussion.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityHubPage;
