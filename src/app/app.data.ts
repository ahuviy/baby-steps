export interface TabData {
    tabId: string;
    tabText: string;
    tabIcon: string;
    tabIconActive: string;
    headingImg: string;
    paragraphs: string[];
}

export const appData: TabData[] = [
    {
        tabId: '1',
        tabText: 'Baby Step 1',
        tabIcon: 'url(/assets/icons/icons_small_bs1.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs1_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs1.png)',
        paragraphs: [
            'An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen it’s simply a matter of when they will happen.',
            'This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!',
        ]
    },
    {
        tabId: '2',
        tabText: 'Baby Step 2',
        tabIcon: 'url(/assets/icons/icons_small_bs2.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs2_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs2.png)',
        paragraphs: [
            'List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.',
            'The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.',
        ]
    },
    {
        tabId: '3',
        tabText: 'Baby Step 3',
        tabIcon: 'url(/assets/icons/icons_small_bs3.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs3_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs3.png)',
        paragraphs: [
            'Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.',
            'Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.',
        ]
    },
    {
        tabId: '4',
        tabText: 'Baby Step 4',
        tabIcon: 'url(/assets/icons/icons_small_bs4.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs4_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs4.png)',
        paragraphs: [
            'When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.',
            'Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.',
        ]
    },
    {
        tabId: '5',
        tabText: 'Baby Step 5',
        tabIcon: 'url(/assets/icons/icons_small_bs5.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs5_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs5.png)',
        paragraphs: [
            'By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.',
            'In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!',
        ]
    },
    {
        tabId: '6',
        tabText: 'Baby Step 6',
        tabIcon: 'url(/assets/icons/icons_small_bs6.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs6_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs6.png)',
        paragraphs: [
            'Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.',
            'As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!',
        ]
    },
    {
        tabId: '7',
        tabText: 'Baby Step 7',
        tabIcon: 'url(/assets/icons/icons_small_bs7.png)',
        tabIconActive: 'url(/assets/icons/icons_small_bs7_blue.png)',
        headingImg: 'url(/assets/headings/heading_bs7.png)',
        paragraphs: [
            'It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It\'s really the only way to live!',
            'Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.',
        ]
    },
];