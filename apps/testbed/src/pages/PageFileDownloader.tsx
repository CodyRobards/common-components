import { WavelengthFileDownloader } from "@wavelengthusaf/components";
import CodeBlock from "../components/CodeBlock/CodeBlock";
import Example from "../components/Example/Example";
import ComponentContainer from "../components/ComponentContainer/ComponentContainer";

function PageFileDownloader() {
  return (
    <>
      <span className="page-name">File Downloader</span>
      <div className="content-block">
        <p>This is a Button that enables you to download files. You can use its default design, or put in your own React button as a prop.</p>
        <br />
        <h2>Import Statements</h2>
        <CodeBlock code='import { WavelengthFileDownloader } from "@wavelengthusaf/components";' />
      </div>
      <Example title="fileloc" description="Can be local for a local file or api for retrieving a file from a different location over the network">
        <ComponentContainer>
          <WavelengthFileDownloader fileURL="../../public/files/RandomFile.txt" fileName="Random.txt" fileLoc={"local"} />
        </ComponentContainer>
      </Example>
    </>
  );
}

export default PageFileDownloader;
