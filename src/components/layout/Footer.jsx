import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 text-xs text-gray-500">
      <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {personalInfo.name} · Data Analyst
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
