export const WELCOME_MESSAGE = {
  blocks: [
    {
      type: 'input',
      element: {
        type: 'static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Doing Well',
              emoji: true,
            },
            value: 'Doing Well',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Neutral',
              emoji: true,
            },
            value: 'Neutral',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Feeling Lucky',
              emoji: true,
            },
            value: 'Feeling Lucky',
          },
        ],
        action_id: 'mood-select',
      },
      label: {
        type: 'plain_text',
        text: 'Welcome. How are you doing?',
        emoji: true,
      },
    }
  ],
};

export const HOBBIES_MESSAGE = {
  blocks: [
    {
      type: 'input',
      element: {
        type: 'multi_static_select',
        placeholder: {
          type: 'plain_text',
          text: 'Select an item',
          emoji: true,
        },
        options: [
          {
            text: {
              type: 'plain_text',
              text: 'Football',
            },
            value: 'football',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Music',
            },
            value: 'music',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Sleep',
            },
            value: 'sleep',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Movies',
            },
            value: 'movies',
          },
          {
            text: {
              type: 'plain_text',
              text: 'Basketball',
            },
            value: 'basketball',
          },
        ],
        action_id: 'hoobies-select',
      },
      label: {
        type: 'plain_text',
        text: 'What are your favorite hobbies',
      },
    },
    {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: {
            type: 'plain_text',
            text: 'Submit',
            emoji: true,
          },
          value: 'click_me_123',
          action_id: 'hoobies-submit',
        },
      ],
    },
  ],
};

export const THANK_YOU_MESSAGE = `{
  blocks: [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'Thank you',
        emoji: true,
      },
    },
  ],
}`;

export const ERROR_MESSAGE = {
  blocks: [
    {
      type: 'section',
      text: {
        type: 'plain_text',
        text: 'I don\' understand, please type hello',
        emoji: true,
      },
    },
  ],
};