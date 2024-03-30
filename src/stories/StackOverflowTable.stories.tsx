import { Story, Meta } from "@storybook/react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "../theme/darkTheme";
import App from "../App";

export default {
  title: "Components/StackOverflowTable",
  component: App,
  decorators: [
    Story => {
      const queryClient = new QueryClient();

      return (
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={darkTheme}>
              <Story />
            </ThemeProvider>
          </QueryClientProvider>
        </RecoilRoot>
      );
    },
  ],
} as Meta;

const Template: Story = () => <App />;

export const FullTable = Template.bind({});
