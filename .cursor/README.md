# Cursor MCP Configuration

## Figma MCP Setup

The Figma MCP server is configured to use an environment variable for the API key to keep sensitive credentials out of version control.

### 1. Get your Figma Access Token

Before you can pull design data from Figma, you will need to generate a Figma access token.

1. From the home page in Figma, click your profile icon in the top left corner and select `Settings` from the dropdown.
2. In the settings menu, select the `Security` tab.
3. Scroll down to the `Personal access tokens` section and click `Generate new token`.
4. Enter a name for the token and make sure you have read permissions on _File content_ and _Dev resources_, then click `Generate token`.

For more detailed instructions, see [Figma's documentation on access tokens](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens).

### 2. Configure the API Key

**Important:** Cursor MCP servers need the environment variable to be available in your shell environment.

1. **Add to your shell profile** (`~/.zshrc` for zsh or `~/.bash_profile` for bash):

   ```bash
   export FIGMA_API_KEY=YOUR-TOKEN
   ```

   Replace `YOUR-TOKEN` with the token you generated in step 1.

2. **Reload your shell** or run:

   ```bash
   source ~/.zshrc  # or ~/.bash_profile
   ```

3. **Restart Cursor** so it picks up the environment variable.

### 3. Using the Figma MCP

After configuring your IDE, you'll be able to pull complete design data from any Figma file.

1. **Copy a link to a Figma frame or group**: Right-click on the frame or group you'd like to implement, then select `Copy/Paste as` and choose `Copy link to selection`.

2. **Paste the link into your editor**: Make a request to your editor's AI agent with the link. A simple request like "Implement this Figma frame" along with the link should work.

3. **Get your design**: The agent will call the MCP's `get_figma_data` function and generate the design based on the Figma data.

For best results, work on one section at a time rather than trying to implement a whole design at once.

### Files

- `mcp.json` - MCP server configuration (committed to git, uses environment variable)

The API key is never committed to git - it's only stored in your local shell environment.

### Reference

For more information, see the [Framelink Quickstart Guide](https://www.framelink.ai/docs/quickstart).
