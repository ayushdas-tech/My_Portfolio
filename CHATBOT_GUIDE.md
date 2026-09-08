# 🤖 Rule-Based Chatbot Guide — Ayush Das Portfolio

This document explains where the chatbot is located, how it works, and how you can easily customize its questions, rules, and responses.

---

## 📍 1. Where to Find the Chatbot

### On Your Website:
- Look at the **bottom-right corner** of the screen.
- You will see a floating button with a green dot: **`[💬 Chat with Ayush]`**.
- Clicking it opens the popup chat window.

### In Your Project Code:
- **Component File**: [`src/components/ui/ChatBot.jsx`](./src/components/ui/ChatBot.jsx)
- **App Integration**: Loaded directly in [`src/App.jsx`](./src/App.jsx)

---

## ⚙️ 2. How the Rule-Based Engine Works

The chatbot is **100% client-side and rule-based**. It requires no external API keys or servers. It evaluates the user's input using keyword matching rules:

```javascript
// Located in src/components/ui/ChatBot.jsx -> getRuleBasedAnswer(userQuery)
```

### Current Pre-Configured Rules:

| Rule Category | Trigger Keywords | What It Answers |
| :--- | :--- | :--- |
| **Projects** | `project`, `case study`, `sales`, `retail`, `dashboard`, `work` | Explains the *Sales & Revenue Dashboard* and *Retail Health Check* with demo links. |
| **Skills** | `skill`, `tool`, `python`, `sql`, `excel`, `power bi`, `tableau`, `stack` | Lists your analytics, programming, and database competencies. |
| **Education** | `education`, `college`, `school`, `btech`, `cgpa`, `degree` | Gives details on *Techno Main Salt Lake* (CGPA 6.85) & *Mc William High School* (94%). |
| **Certifications** | `certificat`, `coder army`, `codewithharry`, `course`, `dsa` | Details your DSA and Data Analytics certifications. |
| **Contact / Hiring** | `contact`, `email`, `hire`, `reach`, `message`, `job`, `intern` | Shares your email (`ayushdas599464@gmail.com`) and confirms availability. |
| **Greetings** | `hello`, `hi`, `hey`, `greetings` | Welcomes the visitor politely. |
| **Fallback** | Any unrecognized question | Prompts the visitor with available topics to explore. |

---

## ✏️ 3. How to Customize or Add New Rules

Open [`src/components/ui/ChatBot.jsx`](./src/components/ui/ChatBot.jsx):

### A. Adding a New Quick Suggestion Chip:
At the top of `ChatBot.jsx`, modify the `quickPrompts` array:
```javascript
const quickPrompts = [
  "💼 What are your projects?",
  "🛠️ What are your skills?",
  "🎓 Tell me about your education",
  "🏆 What certifications do you have?",
  "📬 How can I contact Ayush?",
  "⭐ What is your favorite data tool?" // <-- Add your new prompt here
];
```

### B. Adding a New Keyword Rule:
Inside the `getRuleBasedAnswer` function, add a new `if` condition:
```javascript
// Example: New rule about tools preference
if (q.includes('favorite') || q.includes('preferred')) {
  return {
    text: "Ayush particularly enjoys building advanced SQL queries for data extraction and designing interactive Power BI dashboards for executive storytelling!"
  };
}
```

### C. Updating Existing Answers:
Simply edit the text inside the respective `if` block in `getRuleBasedAnswer`.

---

## 🔒 4. Benefits of this Rule-Based Setup
- **Instant Speed**: Zero network latency or API rate limits.
- **Privacy & Safety**: No third-party AI hallucinating incorrect information.
- **Cost**: 100% free forever with no ongoing API billing.
