"use client";
import { ShaderBackground } from "@/components/ui/shaders-hero-section";
import { Safari } from "@/components/ui/safari";
import { PinContainer } from "@/components/ui/3d-pin";

export default function IntraRegionalPage() {
  const url = "https://libertytranscargo.com/intra-regional/workspace";
  
  return (
    <ShaderBackground>
      <div className="absolute inset-0 flex items-center justify-center z-20 p-8">
        <PinContainer
          title={url}
          href={url}
          containerClassName="w-[70%] h-auto max-h-[70vh]"
          className="w-full h-full"
        >
          <Safari
            url={url}
            src="https://shottr-cloud.s3.ap-south-1.amazonaws.com/SCR-20260103-ezn.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZUIC45ZBAVGC3APO%2F20260103%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20260103T070501Z&X-Amz-Expires=345600&X-Amz-SignedHeaders=host&X-Amz-Signature=7e730a0701cde93e43f7bdeb3730830de879ca55736c934993f96206758bce8d"
            className="w-full h-auto"
          />
        </PinContainer>
      </div>
    </ShaderBackground>
  );
}

