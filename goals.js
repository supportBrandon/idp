document.getElementById('name').innerText = 'Brandon Rivera';
document.getElementById('manager').innerText = 'Dustin Staub';

const shortTermGoals = [
    '1) I would like to grow in my current role to be a level II when the opportunity arises.',
    '2) Maintain consistency with handling Service Requests.',
    '3) Assist and collaborate with team members to enhance team dynamics and knowledge sharing.'
];

const longTermGoals = [
    '1) Increase the number of rebuild tickets completed per month to above 20.',
    '2) Reduce the average time spent on each CX ticket to 16 minutes.',
    '3) Continue participating in QA testing. At least in 2 in the next couple of months.',
    '4) Adopt a product engineer mindset to improve customer and advocate experience.'
];

const developmentGoals = [
    {
        goal: 'Increase Participation in QA Testing',
        competency: 'QA Testing',
        activities: 'I would like to keep participating in projects so I may build my QA knowledge.',
        targetDates: 'Start to participate immediately, preferably whenever the next project is announced.',
        supportNeeded: 'Discuss with your manager about balancing QA tasks with regular work'
    },
    {
        goal: 'Consistency in Service Requests',
        competency: 'Service Request Handling',
        activities: 'Develop a daily routine to handle service requests, use productivity tools to stay organized, seek feedback to improve.',
        targetDates: 'In the next 5 months, I want to make it a habit to take on any Service Request.',
        supportNeeded: 'I would like support from my lead and Level II and Seniors on my team in case I am stuck troubleshooting an issue.'
    },
    {
        goal: 'Expand my technical background',
        competency: 'Learn React.JS',
        activities: 'Udemy, side projects, and potentially build something for the Support team if there is time.',
        targetDates: 'I would like to be an expert at it in 3 to 5 months.',
        supportNeeded: 'I am still a beginner, so perhaps getting some hands on experience to help enforce my developer journey.'
    }
];

shortTermGoals.forEach(goal => {
    document.getElementById('shortTermGoals').innerHTML += `<p>${goal}</p>`;
});

longTermGoals.forEach(goal => {
    document.getElementById('longTermGoals').innerHTML += `<p>${goal}</p>`;
});

developmentGoals.forEach(goal => {
    document.getElementById('developmentGoals').innerHTML += `
        <h3>${goal.goal}</h3>
        <p>Competency or Technical Area of Focus: ${goal.competency}</p>
        <p>Activities: ${goal.activities}</p>
        <p>Target Dates: ${goal.targetDates}</p>
        <p>Support Needed/Barriers to Overcome: ${goal.supportNeeded}</p>
    `;
});