import { personalInfo, educationList, projects, certifications, skillCategories } from '../data/portfolioData';

const SYSTEM_PROMPT = `You are the personal AI Assistant representing Ayush Das on his portfolio website.
Your goal is to answer questions about Ayush Das, his data analytics skills, projects, education, credentials, and also discuss data analytics, SQL, Python, and business intelligence topics with recruiters and visitors.

--- AYUSH DAS PROFILE & KNOWLEDGE BASE ---
• Name: Ayush Das
• Role: Data Analyst & Final-Year B.Tech CSBS (Computer Science & Business Systems) student
• Education:
  - Techno Main Salt Lake (2023 – 2027): B.Tech in Computer Science & Business Systems (CSBS), CGPA: 6.85
  - Alipurduar Mc William High School: Higher Secondary (Class XII) in Science, Score: 94%
• Core Focus: Transforming raw transactional & business data into clean insights, interactive dashboards, and strategic decisions.
• Contact Email: ayushdas599464@gmail.com
• Location: Kolkata, West Bengal, India
• Availability: Actively open and ready for full-time Data Analyst and Business Intelligence roles and internships.

--- TECHNICAL TOOLKIT ---
• Analytics & BI: Excel (VLOOKUP, XLOOKUP, Pivot Tables, Power Query, Financial Models), Power BI (DAX formulas, Data Modeling, KPI Dashboards), Tableau (Calculated fields, Visual storytelling)
• Programming Languages: Python, SQL (Complex joins, Window functions, CTEs, Aggregations), C++ (Problem solving & DSA)
• Python Data Libraries: Pandas (Data cleansing, DataFrames, GroupBy), NumPy (Matrix math, Vectorized computation), Matplotlib, Seaborn (Statistical charts, heatmaps)
• Databases: MySQL (Schema design, indexing, CRUD, query tuning)
• CS Core: Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Git, GitHub

--- FEATURED PROJECTS ---
1. "Sales & Revenue Analytics Dashboard"
   - Tech: HTML5, CSS3, JavaScript (ES6+), Chart.js
   - Description: Interactive commercial analytics dashboard analyzing revenue, profit, orders, customer cohorts, product/category margins, and regional sales distribution with live search and multi-metric filter engine.
   - Live Demo: https://sales-revenue-analytics-dashboard.netlify.app/
   - GitHub: https://github.com/ayushdas-tech/sales-revenue-analytics-dashboard

2. "Retail Sales Health Check"
   - Tech: SQL (MySQL), HTML5, CSS3, JavaScript, Chart.js
   - Description: SQL-driven diagnostics identifying where heavy discounting (>20%) severely erodes net gross margin. Formulated calibrated pricing ceilings projecting +8.2% margin recovery.

--- CERTIFICATIONS ---
1. Data Structures & Algorithms — Coder Army (C++, Complexity Analysis, Logic Building)
2. Data Analytics — CodeWithHarry (Python for Analytics, Pandas, NumPy, SQL EDA)

--- INSTRUCTIONS FOR REPLIES ---
• Be concise, professional, warm, and helpful.
• You can answer general questions about Ayush, but also assist recruiters with analytics logic, SQL queries, or data modeling questions if they test Ayush's domain knowledge.
• When mentioning projects, feel free to include their live links where appropriate.
• Do not share any phone numbers (email only: ayushdas599464@gmail.com).`;

export async function generateAIResponse(chatHistory, userMessage) {
  // Construct messages payload for OpenAI-compatible LLM endpoint
  const formattedMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...chatHistory.map(m => ({
      role: m.sender === 'user' ? 'user' : 'assistant',
      content: m.text
    })),
    { role: 'user', content: userMessage }
  ];

  try {
    // Free, zero-setup open-source LLM endpoint (Pollinations OpenAI-compatible API)
    const response = await fetch('https://text.pollinations.ai/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai',
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 350
      })
    });

    if (response.ok) {
      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content;
      if (reply && reply.trim()) {
        return reply.trim();
      }
    }
  } catch (err) {
    console.warn('Direct LLM network call fallback:', err);
  }

  // Backup direct text LLM endpoint
  try {
    const directResponse = await fetch('https://text.pollinations.ai/' + encodeURIComponent(userMessage + ' (Context: You are Ayush Das\'s portfolio assistant. Answer concisely based on: ' + SYSTEM_PROMPT.slice(0, 500) + ')'));
    if (directResponse.ok) {
      const text = await directResponse.text();
      if (text && text.trim() && !text.includes('Error')) {
        return text.trim();
      }
    }
  } catch (e) {
    console.warn('Backup LLM endpoint fallback:', e);
  }

  // Semantic Intelligent Local Engine Fallback
  return getSemanticLocalFallback(userMessage);
}

function getSemanticLocalFallback(query) {
  const q = query.toLowerCase();

  if (q.includes('project') || q.includes('sales') || q.includes('retail') || q.includes('dashboard')) {
    return `Ayush has built two key analytics projects:\n\n1. 📊 **Sales & Revenue Analytics Dashboard**: An interactive commercial analytics dashboard built with HTML, CSS, JavaScript, and Chart.js.\n🔗 Live Demo: https://sales-revenue-analytics-dashboard.netlify.app/\n\n2. 🔍 **Retail Sales Health Check**: A SQL-driven diagnostic engine analyzing profit margin erosion when discounts exceed 20%.`;
  }

  if (q.includes('skill') || q.includes('python') || q.includes('sql') || q.includes('excel') || q.includes('power bi') || q.includes('tableau')) {
    return `Ayush specializes in:\n\n• **BI & Analytics**: Excel (Power Query, Pivot Tables, VLOOKUP), Power BI (DAX modeling), Tableau\n• **Programming**: Python, SQL, C++\n• **Data Libraries**: Pandas, NumPy, Matplotlib, Seaborn\n• **Databases**: MySQL\n• **CS Core**: DSA, OOP, Operating Systems, Git/GitHub`;
  }

  if (q.includes('education') || q.includes('college') || q.includes('school') || q.includes('cgpa')) {
    return `Ayush is currently in his final year at **Techno Main Salt Lake** pursuing B.Tech in Computer Science & Business Systems (2023–2027) with a CGPA of **6.85**. He completed Class XII with **94%** from Alipurduar Mc William High School.`;
  }

  if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
    return `You can reach Ayush directly via email at **ayushdas599464@gmail.com**. He is based in Kolkata, India, and is open for full-time Data Analyst and BI roles!`;
  }

  return `Ayush Das is a final-year B.Tech CSBS student specializing in data analytics, SQL, Python, Excel, Power BI, and Tableau. Feel free to ask about his projects, technical skills, education, or contact details!`;
}
