import chalk from "chalk";

export const parseUrl = (url: string) => {
  console.log(chalk.bgGreenBright("\n-----URL INFORMATION-----"));
  const { hostname, host, searchParams, port, pathname, protocol } = new URL(
    url
  );
  if (host !== hostname) {
    console.log(chalk.bold("Hostname: "), chalk.green(hostname));
  }
  console.log(chalk.bold("Pathname: "), chalk.green(pathname));
  console.log(chalk.bold("Protocol: "), chalk.green(protocol));

  if (port) console.log(chalk.bold("Port: "), chalk.green(port));

  const params = Object.fromEntries(new URLSearchParams(searchParams));
  if (Object.entries(params).length) {
    console.log(chalk.bold("\nSearch parms: "));
    Object.entries(params).forEach(([key, value]) => {
      console.log("   ", chalk.bold(key), chalk.green(value));
    });
  }
};
