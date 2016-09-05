{ nixpkgs ? <nixpkgs>
, systems ? [ "i686-linux" "x86_64-linux" "x86_64-darwin" ]
, officialRelease ? false
}:

let
  pkgs = import nixpkgs {};
  
  version = (builtins.fromJSON (builtins.readFile ./package.json)).version;
  
  jobset = import ./default.nix {
    inherit pkgs;
    system = builtins.currentSystem;
  };
  
  jobs = rec {
    inherit (jobset) tarball;
  
    package = pkgs.lib.genAttrs systems (system:
      (import ./default.nix {
        pkgs = import nixpkgs { inherit system; };
        inherit system;
      }).package.override {
        postInstall = ''
          rm -fv *.zip
          titaniumifier
          mkdir -p $out/{nix-support,zips}
          cp -v *.zip $out/zips
          echo "file source-dist $(echo $out/zips/*.zip)" >> $out/nix-support/hydra-build-products
        '';
      }
    );
  };
in
jobs
