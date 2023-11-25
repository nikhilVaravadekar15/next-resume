
## Prompting Principles
- Principle 1: Write clear and specific instructions
- Principle 2: Give the model time to “think”

### Tactics

- Tactic 1: Use delimiters to clearly indicate distinct parts of the input
  - Delimiters can be anything like: ```, """, < >, `<tag> </tag>`, `:`

- Tactic 2: Ask for a structured output
  - JSON, HTML

- Tactic 3: Ask the model to check whether conditions are satisfied

- Tactic 4: "Few-shot" prompting

### For example: 


I want you to act as my resueme builder that will help me secure a job.

I will provide you with two sets of information. The first set includes my work experience, educational background, skills, and any relevant certifications or awards. The second set is a detailed description of the job I'm applying for, including the company name, job title, responsibilities, and required qualifications.

Based on this information, create a resume that highlights the skills and experiences that align most closely with the job requirements. Emphasize the value I can bring to the company and how my qualifications make me a strong candidate for the position. The language should be formal, concise, and positive.

Include feedback on the following points: 
- add appropriate sections for making my resume more readable.  
- add appropriate action verbs.
- make my resume easier to scan.
- add appropriate buzzwords based on the context

then provide me the response in latex format, This will make it easier for me to convert the information into a beautiful and professionally formatted document.

Here's my information delimited by triple backticks:

```
1. Contact Information: Your full name, phone number, email address, and location (city and state/country).

2. Education: List your educational background, including the degrees you've earned, the institutions you attended, and the graduation dates.

3. Skills (if applicable): Mention any relevant skills, both technical and soft skills, that are applicable to the job you're targeting.

4. Achievements (if applicable): Highlight any awards, recognitions, or notable achievements in your career.

5. Projects (if applicable): Mention projects you have worked on if any, that are applicable to the job you're targeting.

6. Certifications (if applicable): List any certifications that are relevant to your field.

7. Work Experience (if applicable): Include your work history, starting with the most recent job. Provide the job title, company name, dates of employment (start and end), and a brief description of your responsibilities and achievements.

```

Here's the job I'm applying for delimited by triple backticks: 
```
[The description of the job you're applying for] 
```
