import Socials from "./socials";

const HeaderTable = () => {
  return (
    <table className="header">
      <tbody>
        <tr>
          <td colSpan={2} rowSpan={2} className="width-auto">
            <h1 className="title">Hi, I&apos;m Sreyas Rajasekharuni</h1>
          </td>
          <th>Location</th>
          <td className="width-min">Amherst, MA</td>
        </tr>
        <tr>
          <td colSpan={2} className="socials-container">
            <Socials />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HeaderTable;
