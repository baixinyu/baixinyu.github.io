$(function(){ // on dom ready

var cy = cytoscape({
  container: document.getElementById('cy'),
   ready: function() {
                
                console.log(cy.json());
                // $('#png').html('<a href="' + cy.png() + '" >dfsa</a>');
                console.log(cy3json);
            },
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'font-size': 10,
        'content': 'data(gene_name)',
        'text-valign': 'center',
        'color': 'white',
        'text-outline-width': 2,
        'text-outline-color': '#888',
        'min-zoomed-font-size': 8,
        'width': 'mapData(score, 0, 1, 20, 50)',
        'height': 'mapData(score, 0, 1, 20, 50)'
      })
    .selector('node[node_type = "query"]')
      .css({
        'background-color': '#666',
        'text-outline-color': '#666'
      })
    .selector('node:selected')
      .css({
        'background-color': '#000',
        'text-outline-color': '#000'
      })
    .selector('edge')
      .css({
        'curve-style': 'haystack',
        'opacity': 0.333,
        'width': 'mapData(normalized_max_weight, 0, 0.01, 1, 2)'
      })
    .selector('edge[data_type = "Predicted"]')
      .css({
        'line-color': '#F6C28C'
      })
    .selector('edge[data_type = "Physical interactions"]')
      .css({
        'line-color': '#EAA2A3'
      })
    .selector('edge[data_type = "Shared protein domains"]')
      .css({
        'line-color': '#DAD4A8'
      })
    .selector('edge[data_type = "Co-expression"]')
      .css({
        'line-color': '#D0B7D3'
      })
    .selector('edge[data_type = "Pathway"]')
      .css({
        'line-color': '#9BD8DD'
      })
    .selector('edge[data_type = "Co-localization"]')
      .css({
        'line-color': '#A0B3D8'
      })
  .selector('edge:selected')
    .css({
      opacity: 1
    }),
  
  elements: cy3json.elements,
  
  layout: {
    name: 'concentric',
    concentric: function(){
      return this.data('score');
    },
    levelWidth: function(nodes){
      return 0.5;
    },
    padding: 10
  }
});
  
}); // on dom ready

// data exported from cytoscape desktop
var cy3json = {
 
  "elements" : {
    "nodes" : [ {
      "data" : {
        "id" : "296",
        "Ensembl_Protein_ID" : "ENSP00000451684",
        "Synonym" : "NY-REN-28",
        "RefSeq_Protein_ID" : "NP_005457",
        "SUID" : 296,
        "score" : 0.02800562173812221,
        "node_type" : "result",
        "log_score" : -3.5753500125983018,
        "Uniprot_ID" : "O75586",
        "selected" : false,
        "gene_name" : "MED6",
        "name" : "H__sapiens__1_-Hs:5285773",
        "Entrez_Gene_ID" : "10001",
        "RefSeq_mRNA_ID" : "NM_005466",
        "shared_name" : "H__sapiens__1_-Hs:5285773",
        "Ensembl_Gene_ID" : "ENSG00000133997"
      },
      "position" : {
        "x" : 147.454345703125,
        "y" : -30.69869613647461
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "262",
        "Ensembl_Protein_ID" : "ENSP00000435414",
        "SUID" : 262,
        "score" : 0.031065063726824715,
        "node_type" : "result",
        "log_score" : -3.471671444065889,
        "selected" : false,
        "gene_name" : "MSH5-C6orf26",
        "name" : "H__sapiens__1_-Hs:5329805",
        "shared_name" : "H__sapiens__1_-Hs:5329805",
        "Ensembl_Gene_ID" : "ENSG00000255152"
      },
      "position" : {
        "x" : -161.0561981201172,
        "y" : -115.74526977539062
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "208",
        "Ensembl_Protein_ID" : "ENSP00000445137",
        "Synonym" : "RAD9",
        "RefSeq_Protein_ID" : "NP_004575",
        "SUID" : 208,
        "score" : 0.029009564995904125,
        "annotation_name" : [ "cell cycle checkpoint", "DNA integrity checkpoint", "response to ionizing radiation", "interphase", "DNA damage checkpoint", "DNA replication", "interphase of mitotic cell cycle", "3'-5' exonuclease activity", "nuclease activity", "exonuclease activity", "response to radiation" ],
        "node_type" : "result",
        "log_score" : -3.5401296759318077,
        "Uniprot_ID" : "RAD9A_HUMAN",
        "selected" : false,
        "gene_name" : "RAD9A",
        "name" : "H__sapiens__1_-Hs:5292421",
        "Entrez_Gene_ID" : "5883",
        "RefSeq_mRNA_ID" : "NM_004584",
        "annotations" : [ "GO:0000075", "GO:0031570", "GO:0010212", "GO:0051325", "GO:0000077", "GO:0006260", "GO:0051329", "GO:0008408", "GO:0004518", "GO:0004527", "GO:0009314" ],
        "shared_name" : "H__sapiens__1_-Hs:5292421",
        "Ensembl_Gene_ID" : "ENSG00000172613"
      },
      "position" : {
        "x" : 119.98678588867188,
        "y" : -76.49085235595703
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "166",
        "Ensembl_Protein_ID" : "ENSP00000445774",
        "Synonym" : "RDH54",
        "RefSeq_Protein_ID" : "NP_036547",
        "SUID" : 166,
        "score" : 0.024791957200763937,
        "annotation_name" : [ "ATPase activity", "mitotic recombination", "DNA helicase activity", "ATPase activity, coupled", "double-strand break repair via homologous recombination", "DNA recombination", "DNA geometric change", "helicase activity", "recombinational repair", "reciprocal meiotic recombination", "DNA duplex unwinding", "meiosis I", "M phase of meiotic cell cycle", "meiosis", "DNA-dependent ATPase activity", "reciprocal DNA recombination", "meiotic cell cycle", "DNA repair", "DNA conformation change", "double-strand break repair" ],
        "node_type" : "result",
        "log_score" : -3.697235984830709,
        "Uniprot_ID" : "RA54B_HUMAN",
        "selected" : false,
        "gene_name" : "RAD54B",
        "name" : "H__sapiens__1_-Hs:5296680",
        "Entrez_Gene_ID" : "25788",
        "RefSeq_mRNA_ID" : "NM_134434",
        "annotations" : [ "GO:0016887", "GO:0006312", "GO:0003678", "GO:0042623", "GO:0000724", "GO:0006310", "GO:0032392", "GO:0004386", "GO:0000725", "GO:0007131", "GO:0032508", "GO:0007127", "GO:0051327", "GO:0007126", "GO:0008094", "GO:0035825", "GO:0051321", "GO:0006281", "GO:0071103", "GO:0006302" ],
        "shared_name" : "H__sapiens__1_-Hs:5296680",
        "Ensembl_Gene_ID" : "ENSG00000197275"
      },
      "position" : {
        "x" : -88.20189666748047,
        "y" : 98.33895111083984
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "162",
        "Ensembl_Protein_ID" : "ENSP00000451673",
        "Synonym" : "MUTSH5",
        "RefSeq_Protein_ID" : "NP_751898",
        "SUID" : 162,
        "score" : 0.03973052220183665,
        "annotation_name" : [ "synaptonemal complex", "ATPase activity", "mismatch repair", "chromosome organization involved in meiosis", "ATPase activity, coupled", "double-stranded DNA binding", "DNA recombination", "nuclear chromosome", "reciprocal meiotic recombination", "condensed nuclear chromosome", "meiosis I", "chromosome segregation", "structure-specific DNA binding", "M phase of meiotic cell cycle", "meiosis", "DNA-dependent ATPase activity", "meiotic chromosome segregation", "synapsis", "reciprocal DNA recombination", "meiotic cell cycle", "DNA repair", "condensed chromosome", "nuclear chromosome part" ],
        "node_type" : "result",
        "log_score" : -3.225635565475669,
        "Uniprot_ID" : "O43196",
        "selected" : false,
        "gene_name" : "MSH5",
        "name" : "H__sapiens__1_-Hs:5299500",
        "Entrez_Gene_ID" : "4439",
        "RefSeq_mRNA_ID" : "NM_172166",
        "annotations" : [ "GO:0000795", "GO:0016887", "GO:0006298", "GO:0070192", "GO:0042623", "GO:0003690", "GO:0006310", "GO:0000228", "GO:0007131", "GO:0000794", "GO:0007127", "GO:0007059", "GO:0043566", "GO:0051327", "GO:0007126", "GO:0008094", "GO:0045132", "GO:0007129", "GO:0035825", "GO:0051321", "GO:0006281", "GO:0000793", "GO:0044454" ],
        "shared_name" : "H__sapiens__1_-Hs:5299500",
        "Ensembl_Gene_ID" : "ENSG00000237333"
      },
      "position" : {
        "x" : -176.98680114746094,
        "y" : -40.90724182128906
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "156",
        "Ensembl_Protein_ID" : "ENSP00000445213",
        "Synonym" : "P95",
        "RefSeq_Protein_ID" : "NP_002476",
        "SUID" : 156,
        "score" : 0.05180973286083873,
        "annotation_name" : [ "ATPase activity", "DNA integrity checkpoint", "telomere organization", "ATP-dependent DNA helicase activity", "regulation of DNA metabolic process", "DNA helicase activity", "regulation of protein autophosphorylation", "ATPase activity, coupled", "ATP-dependent helicase activity", "regulation of DNA-dependent DNA replication", "DNA geometric change", "helicase activity", "DNA-dependent DNA replication", "DNA repair", "purine NTP-dependent helicase activity", "nuclear chromosome part", "cell cycle checkpoint", "DNA recombination", "regulation of DNA replication", "double-strand break repair via homologous recombination", "DNA damage checkpoint", "recombinational repair", "nuclear chromosome", "DNA duplex unwinding", "anatomical structure homeostasis", "DNA-dependent ATPase activity", "nuclear chromosome, telomeric region", "DNA replication", "DNA conformation change", "double-strand break repair", "telomere maintenance", "positive regulation of protein autophosphorylation", "damaged DNA binding", "chromosome, telomeric region" ],
        "node_type" : "result",
        "log_score" : -2.9601772543000062,
        "Uniprot_ID" : "O60934",
        "selected" : false,
        "gene_name" : "NBN",
        "name" : "H__sapiens__1_-Hs:5281807",
        "Entrez_Gene_ID" : "4683",
        "RefSeq_mRNA_ID" : "NM_002485",
        "annotations" : [ "GO:0016887", "GO:0031570", "GO:0032200", "GO:0004003", "GO:0051052", "GO:0003678", "GO:0031952", "GO:0042623", "GO:0008026", "GO:0090329", "GO:0032392", "GO:0004386", "GO:0006261", "GO:0006281", "GO:0070035", "GO:0044454", "GO:0000075", "GO:0006310", "GO:0006275", "GO:0000724", "GO:0000077", "GO:0000725", "GO:0000228", "GO:0032508", "GO:0060249", "GO:0008094", "GO:0000784", "GO:0006260", "GO:0071103", "GO:0006302", "GO:0000723", "GO:0031954", "GO:0003684", "GO:0000781" ],
        "shared_name" : "H__sapiens__1_-Hs:5281807",
        "Ensembl_Gene_ID" : "ENSG00000104320"
      },
      "position" : {
        "x" : -12.864280343055725,
        "y" : -119.2969970703125
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "154",
        "Ensembl_Protein_ID" : "ENSP00000392843",
        "Synonym" : "PMSL2",
        "RefSeq_Protein_ID" : "NP_000526",
        "SUID" : 154,
        "score" : 0.07624349196342234,
        "annotation_name" : [ "single-stranded DNA binding", "ATPase activity", "production of molecular mediator of immune response", "mismatch repair", "immunoglobulin production", "DNA recombination", "double-stranded DNA binding", "somatic diversification of immunoglobulins", "reciprocal meiotic recombination", "mismatch repair complex binding", "meiosis I", "somatic diversification of immune receptors", "structure-specific DNA binding", "M phase of meiotic cell cycle", "protein complex binding", "meiosis", "reciprocal DNA recombination", "meiotic cell cycle", "DNA repair", "ATP catabolic process", "ATP metabolic process" ],
        "node_type" : "result",
        "log_score" : -2.5738232184366248,
        "Uniprot_ID" : "Q68D20",
        "selected" : false,
        "gene_name" : "PMS2",
        "name" : "H__sapiens__1_-Hs:5284210",
        "Entrez_Gene_ID" : "5395",
        "RefSeq_mRNA_ID" : "NR_003085",
        "annotations" : [ "GO:0003697", "GO:0016887", "GO:0002440", "GO:0006298", "GO:0002377", "GO:0006310", "GO:0003690", "GO:0016445", "GO:0007131", "GO:0032404", "GO:0007127", "GO:0002200", "GO:0043566", "GO:0051327", "GO:0032403", "GO:0007126", "GO:0035825", "GO:0051321", "GO:0006281", "GO:0006200", "GO:0046034" ],
        "shared_name" : "H__sapiens__1_-Hs:5284210",
        "Ensembl_Gene_ID" : "ENSG00000122512"
      },
      "position" : {
        "x" : -100.9500732421875,
        "y" : -29.909954071044922
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "142",
        "Ensembl_Protein_ID" : "ENSP00000431225",
        "Synonym" : "RAD502",
        "RefSeq_Protein_ID" : "NP_005723",
        "SUID" : 142,
        "score" : 0.6987923997949083,
        "annotation_name" : [ "ATPase activity", "telomere maintenance via telomere lengthening", "ATP-dependent DNA helicase activity", "telomere organization", "regulation of DNA metabolic process", "mitotic recombination", "DNA helicase activity", "regulation of protein autophosphorylation", "ATPase activity, coupled", "ATP-dependent helicase activity", "3'-5' exonuclease activity", "nuclease activity", "DNA geometric change", "helicase activity", "reciprocal meiotic recombination", "meiotic cell cycle", "DNA repair", "purine NTP-dependent helicase activity", "nuclear chromosome part", "RNA-dependent DNA replication", "endodeoxyribonuclease activity", "double-strand break repair via homologous recombination", "DNA recombination", "endonuclease activity", "recombinational repair", "nuclear chromosome", "DNA duplex unwinding", "meiosis I", "anatomical structure homeostasis", "telomere maintenance via telomerase", "deoxyribonuclease activity", "M phase of meiotic cell cycle", "DNA-dependent ATPase activity", "meiosis", "nuclear chromosome, telomeric region", "reciprocal DNA recombination", "DNA replication", "DNA conformation change", "double-strand break repair", "positive regulation of protein autophosphorylation", "telomere maintenance", "regulation of DNA recombination", "exonuclease activity", "chromosome, telomeric region" ],
        "node_type" : "query",
        "log_score" : -0.3584015768619354,
        "Uniprot_ID" : "RAD50_HUMAN",
        "selected" : false,
        "gene_name" : "RAD50",
        "name" : "H__sapiens__1_-Hs:5283121",
        "Entrez_Gene_ID" : "10111",
        "RefSeq_mRNA_ID" : "NM_133482",
        "annotations" : [ "GO:0016887", "GO:0010833", "GO:0004003", "GO:0032200", "GO:0051052", "GO:0006312", "GO:0003678", "GO:0031952", "GO:0042623", "GO:0008026", "GO:0008408", "GO:0004518", "GO:0032392", "GO:0004386", "GO:0007131", "GO:0051321", "GO:0006281", "GO:0070035", "GO:0044454", "GO:0006278", "GO:0004520", "GO:0000724", "GO:0006310", "GO:0004519", "GO:0000725", "GO:0000228", "GO:0032508", "GO:0007127", "GO:0060249", "GO:0007004", "GO:0004536", "GO:0051327", "GO:0008094", "GO:0007126", "GO:0000784", "GO:0035825", "GO:0006260", "GO:0071103", "GO:0006302", "GO:0031954", "GO:0000723", "GO:0000018", "GO:0004527", "GO:0000781" ],
        "shared_name" : "H__sapiens__1_-Hs:5283121",
        "Ensembl_Gene_ID" : "ENSG00000113522"
      },
      "position" : {
        "x" : -132.26124572753906,
        "y" : -69.47577667236328
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "141",
        "Ensembl_Protein_ID" : "ENSP00000440204",
        "RefSeq_Protein_ID" : "NP_002430",
        "SUID" : 141,
        "score" : 0.0874266227357044,
        "annotation_name" : [ "ATPase activity", "single-stranded DNA binding", "production of molecular mediator of immune response", "regulation of DNA metabolic process", "mismatch repair", "immunoglobulin production", "ATPase activity, coupled", "reciprocal meiotic recombination", "somatic recombination of immunoglobulin gene segments", "somatic cell DNA recombination", "meiotic cell cycle", "DNA repair", "somatic diversification of immune receptors via germline recombination within a single locus", "negative regulation of DNA metabolic process", "DNA recombination", "double-stranded DNA binding", "somatic diversification of immunoglobulins", "nuclear chromosome", "meiosis I", "somatic diversification of immune receptors", "structure-specific DNA binding", "DNA-dependent ATPase activity", "meiosis", "M phase of meiotic cell cycle", "reciprocal DNA recombination", "regulation of DNA recombination", "DNA secondary structure binding" ],
        "node_type" : "result",
        "log_score" : -2.4369554347442284,
        "Uniprot_ID" : "P20585",
        "selected" : false,
        "gene_name" : "MSH3",
        "name" : "H__sapiens__1_-Hs:5283097",
        "Entrez_Gene_ID" : "4437",
        "RefSeq_mRNA_ID" : "NM_002439",
        "annotations" : [ "GO:0016887", "GO:0003697", "GO:0002440", "GO:0051052", "GO:0006298", "GO:0002377", "GO:0042623", "GO:0007131", "GO:0016447", "GO:0016444", "GO:0051321", "GO:0006281", "GO:0002562", "GO:0051053", "GO:0006310", "GO:0003690", "GO:0016445", "GO:0000228", "GO:0007127", "GO:0002200", "GO:0043566", "GO:0008094", "GO:0007126", "GO:0051327", "GO:0035825", "GO:0000018", "GO:0000217" ],
        "shared_name" : "H__sapiens__1_-Hs:5283097",
        "Ensembl_Gene_ID" : "ENSG00000113318"
      },
      "position" : {
        "x" : -48.97200965881348,
        "y" : -133.3314666748047
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "133",
        "Ensembl_Protein_ID" : "ENSP00000388271",
        "Synonym" : "FLJ40346",
        "RefSeq_Protein_ID" : "NP_689655",
        "SUID" : 133,
        "score" : 0.03172627425415109,
        "annotation_name" : [ "cell cycle checkpoint", "DNA replication" ],
        "node_type" : "result",
        "log_score" : -3.4506101005728227,
        "Uniprot_ID" : "RAD9B_HUMAN",
        "selected" : false,
        "gene_name" : "RAD9B",
        "name" : "H__sapiens__1_-Hs:5288367",
        "Entrez_Gene_ID" : "144715",
        "RefSeq_mRNA_ID" : "NM_152442",
        "annotations" : [ "GO:0000075", "GO:0006260" ],
        "shared_name" : "H__sapiens__1_-Hs:5288367",
        "Ensembl_Gene_ID" : "ENSG00000151164"
      },
      "position" : {
        "x" : 198.31019592285156,
        "y" : -4.760814666748047
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "128",
        "Ensembl_Protein_ID" : "ENSP00000352271",
        "RefSeq_Protein_ID" : "NP_005422",
        "SUID" : 128,
        "score" : 0.7948445125510166,
        "annotation_name" : [ "M phase of meiotic cell cycle", "meiosis", "DNA repair", "meiotic cell cycle" ],
        "node_type" : "query",
        "log_score" : -0.22960876515323383,
        "Uniprot_ID" : "XRCC2_HUMAN",
        "selected" : false,
        "gene_name" : "XRCC2",
        "name" : "H__sapiens__1_-Hs:5296442",
        "Entrez_Gene_ID" : "7516",
        "RefSeq_mRNA_ID" : "NM_005431",
        "annotations" : [ "GO:0051327", "GO:0007126", "GO:0006281", "GO:0051321" ],
        "shared_name" : "H__sapiens__1_-Hs:5296442",
        "Ensembl_Gene_ID" : "ENSG00000196584"
      },
      "position" : {
        "x" : 117.16448974609375,
        "y" : 93.37422943115234
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "125",
        "Ensembl_Protein_ID" : "ENSP00000442809",
        "Synonym" : "MRE11B",
        "RefSeq_Protein_ID" : "NP_005582",
        "SUID" : 125,
        "score" : 0.6483830644948494,
        "annotation_name" : [ "ATPase activity", "mitotic recombination", "ATPase activity, coupled", "regulation of protein autophosphorylation", "3'-5' exonuclease activity", "helicase activity", "reciprocal meiotic recombination", "DNA-dependent DNA replication", "purine NTP-dependent helicase activity", "negative regulation of DNA-dependent DNA replication", "regulation of DNA replication", "DNA recombination", "double-strand break repair via homologous recombination", "double-stranded DNA binding", "endonuclease activity", "recombinational repair", "DNA duplex unwinding", "DNA-dependent ATPase activity", "reciprocal DNA recombination", "DNA conformation change", "telomere maintenance via telomere lengthening", "telomere organization", "ATP-dependent DNA helicase activity", "regulation of DNA metabolic process", "DNA helicase activity", "ATP-dependent helicase activity", "nuclease activity", "DNA geometric change", "regulation of DNA-dependent DNA replication", "chromosome segregation", "meiotic cell cycle", "DNA repair", "RNA-dependent DNA replication", "negative regulation of DNA metabolic process", "endodeoxyribonuclease activity", "meiosis I", "anatomical structure homeostasis", "telomere maintenance via telomerase", "deoxyribonuclease activity", "meiosis", "M phase of meiotic cell cycle", "structure-specific DNA binding", "DNA replication", "telomere maintenance", "positive regulation of protein autophosphorylation", "double-strand break repair", "regulation of DNA recombination", "exonuclease activity", "chromosome, telomeric region" ],
        "node_type" : "query",
        "log_score" : -0.4332736083777458,
        "Uniprot_ID" : "P49959",
        "selected" : false,
        "gene_name" : "MRE11A",
        "name" : "H__sapiens__1_-Hs:5279290",
        "Entrez_Gene_ID" : "4361",
        "RefSeq_mRNA_ID" : "NM_005591",
        "annotations" : [ "GO:0016887", "GO:0006312", "GO:0042623", "GO:0031952", "GO:0008408", "GO:0004386", "GO:0007131", "GO:0006261", "GO:0070035", "GO:2000104", "GO:0006275", "GO:0006310", "GO:0000724", "GO:0003690", "GO:0004519", "GO:0000725", "GO:0032508", "GO:0008094", "GO:0035825", "GO:0071103", "GO:0010833", "GO:0032200", "GO:0004003", "GO:0051052", "GO:0003678", "GO:0008026", "GO:0004518", "GO:0032392", "GO:0090329", "GO:0007059", "GO:0051321", "GO:0006281", "GO:0006278", "GO:0051053", "GO:0004520", "GO:0007127", "GO:0060249", "GO:0007004", "GO:0004536", "GO:0007126", "GO:0051327", "GO:0043566", "GO:0006260", "GO:0000723", "GO:0031954", "GO:0006302", "GO:0000018", "GO:0004527", "GO:0000781" ],
        "shared_name" : "H__sapiens__1_-Hs:5279290",
        "Ensembl_Gene_ID" : "ENSG00000020922"
      },
      "position" : {
        "x" : -80.51427459716797,
        "y" : -1.4280643463134766
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "122",
        "Ensembl_Protein_ID" : "ENSP00000359248",
        "Synonym" : "TWINL",
        "RefSeq_Protein_ID" : "NP_068602",
        "SUID" : 122,
        "score" : 0.020852658650639955,
        "annotation_name" : [ "single-stranded DNA binding", "DNA-dependent DNA replication", "DNA helicase activity", "structure-specific DNA binding", "DNA replication", "helicase activity" ],
        "node_type" : "result",
        "log_score" : -3.8702738256463043,
        "Uniprot_ID" : "Q96RR1",
        "selected" : false,
        "gene_name" : "C10orf2",
        "name" : "H__sapiens__1_-Hs:5282366",
        "Entrez_Gene_ID" : "56652",
        "RefSeq_mRNA_ID" : "NM_021830",
        "annotations" : [ "GO:0003697", "GO:0006261", "GO:0003678", "GO:0043566", "GO:0006260", "GO:0004386" ],
        "shared_name" : "H__sapiens__1_-Hs:5282366",
        "Ensembl_Gene_ID" : "ENSG00000107815"
      },
      "position" : {
        "x" : 97.42328643798828,
        "y" : -7.794933319091797
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "109",
        "Ensembl_Protein_ID" : "ENSP00000412703",
        "Synonym" : "LIM15",
        "RefSeq_Protein_ID" : "NP_008999",
        "SUID" : 109,
        "score" : 0.7462579847077966,
        "annotation_name" : [ "M phase of meiotic cell cycle", "meiosis", "meiotic cell cycle" ],
        "node_type" : "query",
        "log_score" : -0.29268391455662557,
        "Uniprot_ID" : "Q14565",
        "selected" : false,
        "gene_name" : "DMC1",
        "name" : "H__sapiens__1_-Hs:5281121",
        "Entrez_Gene_ID" : "11144",
        "RefSeq_mRNA_ID" : "NM_007068",
        "annotations" : [ "GO:0051327", "GO:0007126", "GO:0051321" ],
        "shared_name" : "H__sapiens__1_-Hs:5281121",
        "Ensembl_Gene_ID" : "ENSG00000100206"
      },
      "position" : {
        "x" : 1.048654556274414,
        "y" : 128.44871520996094
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "108",
        "Ensembl_Protein_ID" : "ENSP00000263187",
        "RefSeq_Protein_ID" : "NP_002431",
        "SUID" : 108,
        "score" : 0.036787303163713814,
        "annotation_name" : [ "synaptonemal complex", "ATPase activity", "chromosome organization involved in meiosis", "ATPase activity, coupled", "double-stranded DNA binding", "DNA recombination", "nuclear chromosome", "reciprocal meiotic recombination", "condensed nuclear chromosome", "meiosis I", "chromosome segregation", "structure-specific DNA binding", "M phase of meiotic cell cycle", "meiosis", "DNA-dependent ATPase activity", "meiotic chromosome segregation", "synapsis", "reciprocal DNA recombination", "meiotic cell cycle", "condensed chromosome", "nuclear chromosome part" ],
        "node_type" : "result",
        "log_score" : -3.3026025160664543,
        "Uniprot_ID" : "O15457",
        "selected" : false,
        "gene_name" : "MSH4",
        "name" : "H__sapiens__1_-Hs:5279663",
        "Entrez_Gene_ID" : "4438",
        "RefSeq_mRNA_ID" : "NM_002440",
        "annotations" : [ "GO:0000795", "GO:0016887", "GO:0070192", "GO:0042623", "GO:0003690", "GO:0006310", "GO:0000228", "GO:0007131", "GO:0000794", "GO:0007127", "GO:0007059", "GO:0043566", "GO:0051327", "GO:0007126", "GO:0008094", "GO:0045132", "GO:0007129", "GO:0035825", "GO:0051321", "GO:0000793", "GO:0044454" ],
        "shared_name" : "H__sapiens__1_-Hs:5279663",
        "Ensembl_Gene_ID" : "ENSG00000057468"
      },
      "position" : {
        "x" : -114.48504638671875,
        "y" : 27.989185333251953
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "103",
        "Ensembl_Protein_ID" : "ENSP00000300086",
        "Synonym" : "DRIP5",
        "RefSeq_Protein_ID" : "NP_061848",
        "SUID" : 103,
        "score" : 0.02655796216160833,
        "annotation_name" : [ "RNA-dependent DNA replication", "telomere maintenance via telomere lengthening", "negative regulation of DNA metabolic process", "telomere organization", "regulation of DNA metabolic process", "DNA recombination", "double-strand break repair via homologous recombination", "recombinational repair", "nuclear chromosome", "anatomical structure homeostasis", "telomere maintenance via telomerase", "nuclear chromosome, telomeric region", "DNA replication", "DNA repair", "double-strand break repair", "telomere maintenance", "regulation of DNA recombination", "nuclear chromosome part", "chromosome, telomeric region" ],
        "node_type" : "result",
        "log_score" : -3.628425683160542,
        "Uniprot_ID" : "TE2IP_HUMAN",
        "selected" : false,
        "gene_name" : "TERF2IP",
        "name" : "H__sapiens__1_-Hs:5290990",
        "Entrez_Gene_ID" : "54386",
        "RefSeq_mRNA_ID" : "NM_018975",
        "annotations" : [ "GO:0006278", "GO:0010833", "GO:0051053", "GO:0032200", "GO:0051052", "GO:0006310", "GO:0000724", "GO:0000725", "GO:0000228", "GO:0060249", "GO:0007004", "GO:0000784", "GO:0006260", "GO:0006281", "GO:0006302", "GO:0000723", "GO:0000018", "GO:0044454", "GO:0000781" ],
        "shared_name" : "H__sapiens__1_-Hs:5290990",
        "Ensembl_Gene_ID" : "ENSG00000166848"
      },
      "position" : {
        "x" : -95.1511459350586,
        "y" : -147.44349670410156
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "97",
        "Ensembl_Protein_ID" : "ENSP00000415269",
        "Synonym" : "RAD51L3",
        "RefSeq_Protein_ID" : "NP_598332",
        "SUID" : 97,
        "score" : 0.06510727191482668,
        "annotation_name" : [ "M phase of meiotic cell cycle", "DNA recombination", "meiosis", "reciprocal DNA recombination", "meiotic cell cycle", "reciprocal meiotic recombination", "meiosis I" ],
        "node_type" : "result",
        "log_score" : -2.7317190322452354,
        "Uniprot_ID" : "RA51D_HUMAN",
        "selected" : false,
        "gene_name" : "RAD51D",
        "name" : "H__sapiens__1_-Hs:5295186",
        "Entrez_Gene_ID" : "5892",
        "RefSeq_mRNA_ID" : "NR_037712",
        "annotations" : [ "GO:0051327", "GO:0006310", "GO:0007126", "GO:0035825", "GO:0051321", "GO:0007131", "GO:0007127" ],
        "shared_name" : "H__sapiens__1_-Hs:5295186",
        "Ensembl_Gene_ID" : "ENSG00000185379"
      },
      "position" : {
        "x" : 124.0413703918457,
        "y" : 42.23262023925781
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "94",
        "Ensembl_Protein_ID" : "ENSP00000452598",
        "Synonym" : "CMM6",
        "RefSeq_Protein_ID" : "NP_005423",
        "SUID" : 94,
        "score" : 0.7937566152061811,
        "annotation_name" : [ "DNA repair" ],
        "node_type" : "query",
        "log_score" : -0.23097839469194076,
        "Uniprot_ID" : "XRCC3_HUMAN",
        "selected" : false,
        "gene_name" : "XRCC3",
        "name" : "H__sapiens__1_-Hs:5284736",
        "Entrez_Gene_ID" : "7517",
        "RefSeq_mRNA_ID" : "NM_005432",
        "annotations" : [ "GO:0006281" ],
        "shared_name" : "H__sapiens__1_-Hs:5284736",
        "Ensembl_Gene_ID" : "ENSG00000126215"
      },
      "position" : {
        "x" : 129.40452575683594,
        "y" : 158.3949737548828
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "87",
        "Ensembl_Protein_ID" : "ENSP00000454176",
        "Synonym" : "RECA",
        "RefSeq_Protein_ID" : "NP_597994",
        "SUID" : 87,
        "score" : 0.6057669967129662,
        "annotation_name" : [ "ATPase activity", "single-stranded DNA binding", "mitotic recombination", "regulation of DNA metabolic process", "ATPase activity, coupled", "DNA geometric change", "reciprocal meiotic recombination", "DNA-dependent DNA replication", "DNA repair", "meiotic cell cycle", "condensed chromosome", "DNA recombination", "double-strand break repair via homologous recombination", "double-stranded DNA binding", "recombinational repair", "nuclear chromosome", "meiosis I", "DNA duplex unwinding", "condensed nuclear chromosome", "structure-specific DNA binding", "DNA-dependent ATPase activity", "meiosis", "M phase of meiotic cell cycle", "DNA replication", "reciprocal DNA recombination", "DNA conformation change", "double-strand break repair" ],
        "node_type" : "query",
        "log_score" : -0.5012598607225376,
        "Uniprot_ID" : "RAD51_HUMAN",
        "selected" : false,
        "gene_name" : "RAD51",
        "name" : "H__sapiens__1_-Hs:5279580",
        "Entrez_Gene_ID" : "5888",
        "RefSeq_mRNA_ID" : "NM_133487",
        "annotations" : [ "GO:0016887", "GO:0003697", "GO:0006312", "GO:0051052", "GO:0042623", "GO:0032392", "GO:0007131", "GO:0006261", "GO:0006281", "GO:0051321", "GO:0000793", "GO:0006310", "GO:0000724", "GO:0003690", "GO:0000725", "GO:0000228", "GO:0007127", "GO:0032508", "GO:0000794", "GO:0043566", "GO:0008094", "GO:0007126", "GO:0051327", "GO:0006260", "GO:0035825", "GO:0071103", "GO:0006302" ],
        "shared_name" : "H__sapiens__1_-Hs:5279580",
        "Ensembl_Gene_ID" : "ENSG00000051180"
      },
      "position" : {
        "x" : 26.319435119628906,
        "y" : 90.4759750366211
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "86",
        "Ensembl_Protein_ID" : "ENSP00000454158",
        "Synonym" : "RECQ2",
        "RefSeq_Protein_ID" : "NP_000048",
        "SUID" : 86,
        "score" : 0.028910432785594575,
        "annotation_name" : [ "single-stranded DNA binding", "synaptonemal complex", "ATPase activity", "DNA integrity checkpoint", "ATP-dependent DNA helicase activity", "regulation of DNA metabolic process", "DNA helicase activity", "interphase", "ATPase activity, coupled", "ATP-dependent helicase activity", "regulation of DNA-dependent DNA replication", "helicase activity", "DNA-dependent DNA replication", "DNA repair", "condensed chromosome", "purine NTP-dependent helicase activity", "response to radiation", "nuclear chromosome part", "cell cycle checkpoint", "negative regulation of DNA metabolic process", "negative regulation of DNA-dependent DNA replication", "response to ionizing radiation", "DNA recombination", "regulation of DNA replication", "double-strand break repair via homologous recombination", "response to X-ray", "DNA damage checkpoint", "recombinational repair", "nuclear chromosome", "condensed nuclear chromosome", "structure-specific DNA binding", "DNA-dependent ATPase activity", "DNA replication", "interphase of mitotic cell cycle", "double-strand break repair", "ATP catabolic process", "ATP metabolic process", "regulation of DNA recombination", "DNA secondary structure binding", "chromosome, telomeric region" ],
        "node_type" : "result",
        "log_score" : -3.5435527529658097,
        "Uniprot_ID" : "P54132",
        "selected" : false,
        "gene_name" : "BLM",
        "name" : "H__sapiens__1_-Hs:5296686",
        "Entrez_Gene_ID" : "641",
        "RefSeq_mRNA_ID" : "NM_000057",
        "annotations" : [ "GO:0003697", "GO:0000795", "GO:0016887", "GO:0031570", "GO:0004003", "GO:0051052", "GO:0003678", "GO:0051325", "GO:0042623", "GO:0008026", "GO:0090329", "GO:0004386", "GO:0006261", "GO:0006281", "GO:0000793", "GO:0070035", "GO:0009314", "GO:0044454", "GO:0000075", "GO:0051053", "GO:2000104", "GO:0010212", "GO:0006310", "GO:0006275", "GO:0000724", "GO:0010165", "GO:0000077", "GO:0000725", "GO:0000228", "GO:0000794", "GO:0043566", "GO:0008094", "GO:0006260", "GO:0051329", "GO:0006302", "GO:0006200", "GO:0046034", "GO:0000018", "GO:0000217", "GO:0000781" ],
        "shared_name" : "H__sapiens__1_-Hs:5296686",
        "Ensembl_Gene_ID" : "ENSG00000197299"
      },
      "position" : {
        "x" : 26.21961212158203,
        "y" : -0.08269882202148438
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "83",
        "Ensembl_Protein_ID" : "ENSP00000439902",
        "Synonym" : "PNCA2",
        "RefSeq_Protein_ID" : "NP_000050",
        "SUID" : 83,
        "score" : 0.04374048590508528,
        "annotation_name" : [ "single-stranded DNA binding", "S phase of mitotic cell cycle", "structure-specific DNA binding", "interphase", "double-strand break repair via homologous recombination", "DNA recombination", "interphase of mitotic cell cycle", "DNA repair", "double-strand break repair", "S phase", "recombinational repair", "nucleotide-excision repair" ],
        "node_type" : "result",
        "log_score" : -3.1294811548540835,
        "Uniprot_ID" : "P51587",
        "selected" : false,
        "gene_name" : "BRCA2",
        "name" : "H__sapiens__1_-Hs:5286824",
        "Entrez_Gene_ID" : "675",
        "RefSeq_mRNA_ID" : "NM_000059",
        "annotations" : [ "GO:0003697", "GO:0000084", "GO:0043566", "GO:0051325", "GO:0000724", "GO:0006310", "GO:0051329", "GO:0006281", "GO:0006302", "GO:0051320", "GO:0000725", "GO:0006289" ],
        "shared_name" : "H__sapiens__1_-Hs:5286824",
        "Ensembl_Gene_ID" : "ENSG00000139618"
      },
      "position" : {
        "x" : 75.6100845336914,
        "y" : 36.0261116027832
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "81",
        "Ensembl_Protein_ID" : "ENSP00000452044",
        "Synonym" : "REC2",
        "RefSeq_Protein_ID" : "NP_598194",
        "SUID" : 81,
        "score" : 0.07252334541845512,
        "annotation_name" : [ "M phase of meiotic cell cycle", "DNA recombination", "meiosis", "reciprocal DNA recombination", "meiotic cell cycle", "reciprocal meiotic recombination", "meiosis I" ],
        "node_type" : "result",
        "log_score" : -2.623846763182445,
        "Uniprot_ID" : "RA51B_HUMAN",
        "selected" : false,
        "gene_name" : "RAD51B",
        "name" : "H__sapiens__1_-Hs:5294341",
        "Entrez_Gene_ID" : "5890",
        "RefSeq_mRNA_ID" : "NM_133510",
        "annotations" : [ "GO:0051327", "GO:0006310", "GO:0007126", "GO:0035825", "GO:0051321", "GO:0007131", "GO:0007127" ],
        "shared_name" : "H__sapiens__1_-Hs:5294341",
        "Ensembl_Gene_ID" : "ENSG00000182185"
      },
      "position" : {
        "x" : 63.98032188415527,
        "y" : 160.54481506347656
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "77",
        "Ensembl_Protein_ID" : "ENSP00000436761",
        "Synonym" : "RAD51L2",
        "RefSeq_Protein_ID" : "NP_478123",
        "SUID" : 77,
        "score" : 0.0962848403255141,
        "annotation_name" : [ "chromosome segregation", "DNA recombination", "DNA repair" ],
        "node_type" : "result",
        "log_score" : -2.3404443939043214,
        "Uniprot_ID" : "RA51C_HUMAN",
        "selected" : false,
        "gene_name" : "RAD51C",
        "name" : "H__sapiens__1_-Hs:5282439",
        "Entrez_Gene_ID" : "5889",
        "RefSeq_mRNA_ID" : "NM_058217",
        "annotations" : [ "GO:0007059", "GO:0006310", "GO:0006281" ],
        "shared_name" : "H__sapiens__1_-Hs:5282439",
        "Ensembl_Gene_ID" : "ENSG00000108384"
      },
      "position" : {
        "x" : 55.58820343017578,
        "y" : 55.86132049560547
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "74",
        "Ensembl_Protein_ID" : "ENSP00000446296",
        "Synonym" : "PIR51",
        "RefSeq_Protein_ID" : "NP_006470",
        "SUID" : 74,
        "score" : 0.86365719664005,
        "annotation_name" : [ "single-stranded DNA binding", "structure-specific DNA binding", "double-stranded DNA binding", "double-strand break repair via homologous recombination", "DNA recombination", "DNA repair", "double-strand break repair", "recombinational repair" ],
        "node_type" : "query",
        "log_score" : -0.14657935205749534,
        "Uniprot_ID" : "R51A1_HUMAN",
        "selected" : false,
        "gene_name" : "RAD51AP1",
        "name" : "H__sapiens__1_-Hs:5282789",
        "Entrez_Gene_ID" : "10635",
        "RefSeq_mRNA_ID" : "NM_006479",
        "annotations" : [ "GO:0003697", "GO:0043566", "GO:0003690", "GO:0000724", "GO:0006310", "GO:0006281", "GO:0006302", "GO:0000725" ],
        "shared_name" : "H__sapiens__1_-Hs:5282789",
        "Ensembl_Gene_ID" : "ENSG00000111247"
      },
      "position" : {
        "x" : -56.794578552246094,
        "y" : 40.09278869628906
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "72",
        "Ensembl_Protein_ID" : "ENSP00000446475",
        "Synonym" : "HSAP",
        "RefSeq_Protein_ID" : "NP_000170",
        "SUID" : 72,
        "score" : 0.7355585791031161,
        "annotation_name" : [ "ATPase activity", "regulation of DNA metabolic process", "production of molecular mediator of immune response", "mismatch repair", "immunoglobulin production", "ATPase activity, coupled", "immunoglobulin production involved in immunoglobulin mediated immune response", "reciprocal meiotic recombination", "somatic recombination of immunoglobulin genes involved in immune response", "somatic recombination of immunoglobulin gene segments", "somatic cell DNA recombination", "meiotic cell cycle", "DNA repair", "somatic diversification of immune receptors via germline recombination within a single locus", "response to radiation", "isotype switching", "negative regulation of DNA metabolic process", "DNA recombination", "double-stranded DNA binding", "somatic diversification of immunoglobulins", "ADP binding", "nuclear chromosome", "somatic diversification of immunoglobulins involved in immune response", "meiosis I", "mismatch repair complex binding", "B cell activation involved in immune response", "somatic diversification of immune receptors", "structure-specific DNA binding", "M phase of meiotic cell cycle", "protein complex binding", "DNA-dependent ATPase activity", "meiosis", "reciprocal DNA recombination", "ATP catabolic process", "ATP metabolic process", "regulation of DNA recombination", "DNA secondary structure binding", "damaged DNA binding", "response to UV" ],
        "node_type" : "query",
        "log_score" : -0.30712509683260214,
        "Uniprot_ID" : "P52701",
        "selected" : false,
        "gene_name" : "MSH6",
        "name" : "H__sapiens__1_-Hs:5283455",
        "Entrez_Gene_ID" : "2956",
        "RefSeq_mRNA_ID" : "NM_000179",
        "annotations" : [ "GO:0016887", "GO:0051052", "GO:0002440", "GO:0006298", "GO:0002377", "GO:0042623", "GO:0002381", "GO:0007131", "GO:0002204", "GO:0016447", "GO:0016444", "GO:0051321", "GO:0006281", "GO:0002562", "GO:0009314", "GO:0045190", "GO:0051053", "GO:0006310", "GO:0003690", "GO:0016445", "GO:0043531", "GO:0000228", "GO:0002208", "GO:0007127", "GO:0032404", "GO:0002312", "GO:0002200", "GO:0043566", "GO:0051327", "GO:0032403", "GO:0008094", "GO:0007126", "GO:0035825", "GO:0006200", "GO:0046034", "GO:0000018", "GO:0000217", "GO:0003684", "GO:0009411" ],
        "shared_name" : "H__sapiens__1_-Hs:5283455",
        "Ensembl_Gene_ID" : "ENSG00000116062"
      },
      "position" : {
        "x" : -65.26790618896484,
        "y" : -80.9007339477539
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "71",
        "Ensembl_Protein_ID" : "ENSP00000442697",
        "Synonym" : "LCFS2",
        "RefSeq_Protein_ID" : "NP_000242",
        "SUID" : 71,
        "score" : 0.6593365529936225,
        "annotation_name" : [ "single-stranded DNA binding", "ATPase activity", "DNA integrity checkpoint", "regulation of DNA metabolic process", "production of molecular mediator of immune response", "mismatch repair", "immunoglobulin production", "ATPase activity, coupled", "immunoglobulin production involved in immunoglobulin mediated immune response", "reciprocal meiotic recombination", "somatic recombination of immunoglobulin genes involved in immune response", "somatic recombination of immunoglobulin gene segments", "somatic cell DNA recombination", "meiotic cell cycle", "DNA repair", "somatic diversification of immune receptors via germline recombination within a single locus", "response to radiation", "isotype switching", "cell cycle checkpoint", "negative regulation of DNA metabolic process", "response to ionizing radiation", "double-stranded DNA binding", "DNA recombination", "response to X-ray", "DNA damage checkpoint", "somatic diversification of immunoglobulins", "ADP binding", "nuclear chromosome", "somatic diversification of immunoglobulins involved in immune response", "meiosis I", "mismatch repair complex binding", "B cell activation involved in immune response", "somatic diversification of immune receptors", "structure-specific DNA binding", "postreplication repair", "M phase of meiotic cell cycle", "protein complex binding", "DNA-dependent ATPase activity", "meiosis", "reciprocal DNA recombination", "double-strand break repair", "ATP catabolic process", "ATP metabolic process", "regulation of DNA recombination", "DNA secondary structure binding", "damaged DNA binding", "response to UV" ],
        "node_type" : "query",
        "log_score" : -0.41652117227381574,
        "Uniprot_ID" : "P43246",
        "selected" : false,
        "gene_name" : "MSH2",
        "name" : "H__sapiens__1_-Hs:5280913",
        "Entrez_Gene_ID" : "4436",
        "RefSeq_mRNA_ID" : "NM_000251",
        "annotations" : [ "GO:0003697", "GO:0016887", "GO:0031570", "GO:0051052", "GO:0002440", "GO:0006298", "GO:0002377", "GO:0042623", "GO:0002381", "GO:0007131", "GO:0002204", "GO:0016447", "GO:0016444", "GO:0051321", "GO:0006281", "GO:0002562", "GO:0009314", "GO:0045190", "GO:0000075", "GO:0051053", "GO:0010212", "GO:0003690", "GO:0006310", "GO:0010165", "GO:0000077", "GO:0016445", "GO:0043531", "GO:0000228", "GO:0002208", "GO:0007127", "GO:0032404", "GO:0002312", "GO:0002200", "GO:0043566", "GO:0006301", "GO:0051327", "GO:0032403", "GO:0008094", "GO:0007126", "GO:0035825", "GO:0006302", "GO:0006200", "GO:0046034", "GO:0000018", "GO:0000217", "GO:0003684", "GO:0009411" ],
        "shared_name" : "H__sapiens__1_-Hs:5280913",
        "Ensembl_Gene_ID" : "ENSG00000095002"
      },
      "position" : {
        "x" : -31.02294158935547,
        "y" : -18.547924041748047
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "69",
        "Ensembl_Protein_ID" : "ENSP00000424713",
        "Synonym" : "RFC140",
        "RefSeq_Protein_ID" : "NP_002904",
        "SUID" : 69,
        "score" : 0.031206713177599377,
        "annotation_name" : [ "RNA-dependent DNA replication", "telomere maintenance via telomere lengthening", "nucleotide-excision repair, DNA gap filling", "transcription-coupled nucleotide-excision repair", "telomere organization", "mitotic recombination", "interphase", "DNA recombination", "telomere maintenance via semi-conservative replication", "DNA strand elongation", "S phase", "nucleotide-excision repair", "anatomical structure homeostasis", "telomere maintenance via recombination", "DNA strand elongation involved in DNA replication", "S phase of mitotic cell cycle", "telomere maintenance via telomerase", "DNA-dependent DNA replication", "DNA replication", "interphase of mitotic cell cycle", "DNA repair", "telomere maintenance" ],
        "node_type" : "result",
        "log_score" : -3.467122041362875,
        "Uniprot_ID" : "RFC1_HUMAN",
        "selected" : false,
        "gene_name" : "RFC1",
        "name" : "H__sapiens__1_-Hs:5279414",
        "Entrez_Gene_ID" : "5981",
        "RefSeq_mRNA_ID" : "NM_002913",
        "annotations" : [ "GO:0006278", "GO:0010833", "GO:0006297", "GO:0006283", "GO:0032200", "GO:0006312", "GO:0051325", "GO:0006310", "GO:0032201", "GO:0022616", "GO:0051320", "GO:0006289", "GO:0060249", "GO:0000722", "GO:0006271", "GO:0000084", "GO:0007004", "GO:0006261", "GO:0006260", "GO:0051329", "GO:0006281", "GO:0000723" ],
        "shared_name" : "H__sapiens__1_-Hs:5279414",
        "Ensembl_Gene_ID" : "ENSG00000035928"
      },
      "position" : {
        "x" : -52.150169372558594,
        "y" : -52.31455993652344
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "68",
        "Ensembl_Protein_ID" : "ENSP00000445928",
        "RefSeq_Protein_ID" : "NP_000225",
        "SUID" : 68,
        "score" : 0.020928226688671225,
        "annotation_name" : [ "telomere maintenance via telomere lengthening", "nucleotide-excision repair, DNA gap filling", "transcription-coupled nucleotide-excision repair", "telomere organization", "base-excision repair", "mitotic recombination", "interphase", "double-strand break repair via homologous recombination", "DNA recombination", "telomere maintenance via semi-conservative replication", "DNA strand elongation", "S phase", "recombinational repair", "nucleotide-excision repair", "telomere maintenance via recombination", "anatomical structure homeostasis", "DNA strand elongation involved in DNA replication", "S phase of mitotic cell cycle", "DNA-dependent DNA replication", "DNA replication", "interphase of mitotic cell cycle", "DNA repair", "double-strand break repair", "telomere maintenance" ],
        "node_type" : "result",
        "log_score" : -3.8666564719296583,
        "Uniprot_ID" : "P18858",
        "selected" : false,
        "gene_name" : "LIG1",
        "name" : "H__sapiens__1_-Hs:5282028",
        "Entrez_Gene_ID" : "3978",
        "RefSeq_mRNA_ID" : "NM_000234",
        "annotations" : [ "GO:0010833", "GO:0006297", "GO:0006283", "GO:0032200", "GO:0006284", "GO:0006312", "GO:0051325", "GO:0000724", "GO:0006310", "GO:0032201", "GO:0022616", "GO:0051320", "GO:0000725", "GO:0006289", "GO:0000722", "GO:0060249", "GO:0006271", "GO:0000084", "GO:0006261", "GO:0006260", "GO:0051329", "GO:0006281", "GO:0006302", "GO:0000723" ],
        "shared_name" : "H__sapiens__1_-Hs:5282028",
        "Ensembl_Gene_ID" : "ENSG00000105486"
      },
      "position" : {
        "x" : -24.98644256591797,
        "y" : 55.95973205566406
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "65",
        "Ensembl_Protein_ID" : "ENSP00000445692",
        "Synonym" : "RAD2",
        "RefSeq_Protein_ID" : "NP_004102",
        "SUID" : 65,
        "score" : 0.051404654654256365,
        "annotation_name" : [ "telomere maintenance via telomere lengthening", "telomere organization", "mitotic recombination", "interphase", "nuclease activity", "DNA strand elongation", "telomere maintenance via recombination", "S phase of mitotic cell cycle", "DNA strand elongation involved in DNA replication", "DNA-dependent DNA replication", "DNA repair", "response to radiation", "base-excision repair", "endodeoxyribonuclease activity", "DNA recombination", "double-stranded DNA binding", "telomere maintenance via semi-conservative replication", "endonuclease activity", "S phase", "anatomical structure homeostasis", "deoxyribonuclease activity", "structure-specific DNA binding", "DNA replication", "interphase of mitotic cell cycle", "double-strand break repair", "telomere maintenance", "exonuclease activity", "damaged DNA binding", "response to UV" ],
        "node_type" : "result",
        "log_score" : -2.9680265531452936,
        "Uniprot_ID" : "P39748",
        "selected" : false,
        "gene_name" : "FEN1",
        "name" : "H__sapiens__1_-Hs:5291428",
        "Entrez_Gene_ID" : "2237",
        "RefSeq_mRNA_ID" : "NM_004111",
        "annotations" : [ "GO:0010833", "GO:0032200", "GO:0006312", "GO:0051325", "GO:0004518", "GO:0022616", "GO:0000722", "GO:0000084", "GO:0006271", "GO:0006261", "GO:0006281", "GO:0009314", "GO:0006284", "GO:0004520", "GO:0006310", "GO:0003690", "GO:0032201", "GO:0004519", "GO:0051320", "GO:0060249", "GO:0004536", "GO:0043566", "GO:0006260", "GO:0051329", "GO:0006302", "GO:0000723", "GO:0004527", "GO:0003684", "GO:0009411" ],
        "shared_name" : "H__sapiens__1_-Hs:5291428",
        "Ensembl_Gene_ID" : "ENSG00000168496"
      },
      "position" : {
        "x" : 10.63907603919506,
        "y" : 43.99934387207031
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "63",
        "Ensembl_Protein_ID" : "ENSP00000444286",
        "Synonym" : "HNPCC2",
        "RefSeq_Protein_ID" : "NP_001161091",
        "SUID" : 63,
        "score" : 0.6140095628222709,
        "annotation_name" : [ "ATPase activity", "synaptonemal complex", "single-stranded DNA binding", "production of molecular mediator of immune response", "immunoglobulin production", "mismatch repair", "reciprocal meiotic recombination", "DNA repair", "meiotic cell cycle", "condensed chromosome", "nuclear chromosome part", "DNA recombination", "somatic diversification of immunoglobulins", "nuclear chromosome", "meiosis I", "mismatch repair complex binding", "condensed nuclear chromosome", "somatic diversification of immune receptors", "meiosis", "protein complex binding", "M phase of meiotic cell cycle", "structure-specific DNA binding", "reciprocal DNA recombination", "ATP catabolic process", "ATP metabolic process" ],
        "node_type" : "query",
        "log_score" : -0.4877447763271721,
        "Uniprot_ID" : "P40692",
        "selected" : false,
        "gene_name" : "MLH1",
        "name" : "H__sapiens__1_-Hs:5280233",
        "Entrez_Gene_ID" : "4292",
        "RefSeq_mRNA_ID" : "NM_001167619",
        "annotations" : [ "GO:0016887", "GO:0000795", "GO:0003697", "GO:0002440", "GO:0002377", "GO:0006298", "GO:0007131", "GO:0006281", "GO:0051321", "GO:0000793", "GO:0044454", "GO:0006310", "GO:0016445", "GO:0000228", "GO:0007127", "GO:0032404", "GO:0000794", "GO:0002200", "GO:0007126", "GO:0032403", "GO:0051327", "GO:0043566", "GO:0035825", "GO:0006200", "GO:0046034" ],
        "shared_name" : "H__sapiens__1_-Hs:5280233",
        "Ensembl_Gene_ID" : "ENSG00000076242"
      },
      "position" : {
        "x" : 7.656166076660156,
        "y" : -74.6204605102539
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "62",
        "Ensembl_Protein_ID" : "ENSP00000368458",
        "RefSeq_Protein_ID" : "NP_872590",
        "SUID" : 62,
        "score" : 0.532256005804256,
        "annotation_name" : [ "transcription-coupled nucleotide-excision repair", "nucleotide-excision repair, DNA gap filling", "telomere maintenance via telomere lengthening", "telomere organization", "mitotic recombination", "mismatch repair", "interphase", "DNA strand elongation", "nucleotide-excision repair", "telomere maintenance via recombination", "S phase of mitotic cell cycle", "DNA strand elongation involved in DNA replication", "DNA-dependent DNA replication", "DNA repair", "nuclear chromosome part", "base-excision repair", "DNA recombination", "double-stranded DNA binding", "telomere maintenance via semi-conservative replication", "S phase", "nuclear chromosome", "mismatch repair complex binding", "anatomical structure homeostasis", "structure-specific DNA binding", "protein complex binding", "postreplication repair", "DNA replication", "interphase of mitotic cell cycle", "telomere maintenance" ],
        "node_type" : "query",
        "log_score" : -0.6306306914690045,
        "Uniprot_ID" : "PCNA_HUMAN",
        "selected" : false,
        "gene_name" : "PCNA",
        "name" : "H__sapiens__1_-Hs:5285585",
        "Entrez_Gene_ID" : "5111",
        "RefSeq_mRNA_ID" : "NM_182649",
        "annotations" : [ "GO:0006283", "GO:0006297", "GO:0010833", "GO:0032200", "GO:0006312", "GO:0006298", "GO:0051325", "GO:0022616", "GO:0006289", "GO:0000722", "GO:0000084", "GO:0006271", "GO:0006261", "GO:0006281", "GO:0044454", "GO:0006284", "GO:0006310", "GO:0003690", "GO:0032201", "GO:0051320", "GO:0000228", "GO:0032404", "GO:0060249", "GO:0043566", "GO:0032403", "GO:0006301", "GO:0006260", "GO:0051329", "GO:0000723" ],
        "shared_name" : "H__sapiens__1_-Hs:5285585",
        "Ensembl_Gene_ID" : "ENSG00000132646"
      },
      "position" : {
        "x" : 40.818458557128906,
        "y" : -27.98885726928711
      },
      "selected" : false
    } ],
    "edges" : [ {
      "data" : {
        "id" : "343",
        "source" : "296",
        "target" : "87",
        "networks" : [ "I2D-BioGRID-Yeast2Human", "I2D-Krogan-Greenblatt-2006-Core-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.08380527794361115, 0.6725959181785583 ],
        "normalized_max_weight" : 0.06106406689613253,
        "SUID" : 343,
        "name" : "H__sapiens__1_-Hs:5285773|H__sapiens__1_-Hs:5279580|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285773|H__sapiens__1_-Hs:5279580|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "297",
        "source" : "296",
        "target" : "63",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.015292830765247345 ],
        "normalized_max_weight" : 4.6378647866484923E-4,
        "SUID" : 297,
        "name" : "H__sapiens__1_-Hs:5285773|H__sapiens__1_-Hs:5280233|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285773|H__sapiens__1_-Hs:5280233|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "267",
        "source" : "262",
        "target" : "108",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.20157292485237122, 0.20432895421981812 ],
        "normalized_max_weight" : 0.022203537722442657,
        "SUID" : 267,
        "name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5279663|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5279663|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "266",
        "source" : "262",
        "target" : "162",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.24062541127204895, 0.23488153517246246 ],
        "normalized_max_weight" : 0.025523553656015253,
        "SUID" : 266,
        "name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5299500|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5299500|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "265",
        "source" : "262",
        "target" : "141",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.18193496763706207, 0.18437828123569489 ],
        "normalized_max_weight" : 0.0200355849627249,
        "SUID" : 265,
        "name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5283097|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5283097|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "264",
        "source" : "262",
        "target" : "71",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.1819346398115158, 0.18437828123569489 ],
        "normalized_max_weight" : 0.0200355849627249,
        "SUID" : 264,
        "name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5280913|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5280913|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "263",
        "source" : "262",
        "target" : "72",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.11795969307422638, 0.11831174045801163 ],
        "normalized_max_weight" : 0.012856421657408532,
        "SUID" : 263,
        "name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5283455|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5329805|H__sapiens__1_-Hs:5283455|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "312",
        "source" : "208",
        "target" : "156",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.028657305985689163 ],
        "normalized_max_weight" : 0.002474583223574659,
        "SUID" : 312,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5281807|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5281807|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "291",
        "source" : "208",
        "target" : "128",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.012950590811669827 ],
        "normalized_max_weight" : 3.927532450579992E-4,
        "SUID" : 291,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5296442|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5296442|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "269",
        "source" : "208",
        "target" : "133",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.6274446249008179, 0.5000028014183044 ],
        "normalized_max_weight" : 0.05433312721150093,
        "SUID" : 269,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5288367|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5288367|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "268",
        "source" : "208",
        "target" : "62",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.4315989911556244, 0.4999985992908478 ],
        "normalized_max_weight" : 0.05433267058460801,
        "SUID" : 268,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5285585|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5285585|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "227",
        "source" : "208",
        "target" : "133",
        "networks" : [ "IREF-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.10224039852619171 ],
        "normalized_max_weight" : 0.0044043975839773795,
        "SUID" : 227,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5288367|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5288367|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "226",
        "source" : "208",
        "target" : "62",
        "networks" : [ "IREF-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.009932291693985462 ],
        "normalized_max_weight" : 4.2787158668147675E-4,
        "SUID" : 226,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5285585|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5285585|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "225",
        "source" : "208",
        "target" : "63",
        "networks" : [ "IREF-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.028653088957071304 ],
        "normalized_max_weight" : 0.0012343417826534025,
        "SUID" : 225,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "209",
        "source" : "208",
        "target" : "65",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.08340640366077423, 0.06930645555257797, 0.06771963834762573 ],
        "normalized_max_weight" : 0.004339525878653925,
        "SUID" : 209,
        "name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5291428|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5292421|H__sapiens__1_-Hs:5291428|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "347",
        "source" : "166",
        "target" : "87",
        "networks" : [ "I2D-BioGRID-Worm2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.6077812314033508 ],
        "normalized_max_weight" : 2.2814558194619608E-4,
        "SUID" : 347,
        "name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5279580|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5279580|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "300",
        "source" : "166",
        "target" : "86",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.015016581863164902 ],
        "normalized_max_weight" : 4.5540866375938396E-4,
        "SUID" : 300,
        "name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5296686|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5296686|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "299",
        "source" : "166",
        "target" : "125",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.0039061876013875008 ],
        "normalized_max_weight" : 1.184631557401859E-4,
        "SUID" : 299,
        "name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5279290|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5279290|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "298",
        "source" : "166",
        "target" : "71",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.007013288326561451 ],
        "normalized_max_weight" : 2.1269236198106977E-4,
        "SUID" : 298,
        "name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5280913|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5280913|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "221",
        "source" : "166",
        "target" : "87",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.03371480852365494, 0.10872942209243774, 0.3210820257663727 ],
        "normalized_max_weight" : 0.00988774154777108,
        "SUID" : 221,
        "name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "167",
        "source" : "166",
        "target" : "109",
        "networks" : [ "IREF-BIND", "IREF-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 1.0, 0.6051638126373291 ],
        "normalized_max_weight" : 0.02606975395941537,
        "SUID" : 167,
        "name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5281121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296680|H__sapiens__1_-Hs:5281121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "328",
        "source" : "162",
        "target" : "125",
        "networks" : [ "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.30231189727783203, 0.19443592429161072 ],
        "normalized_max_weight" : 0.02008448947559324,
        "SUID" : 328,
        "name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5279290|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5279290|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "255",
        "source" : "162",
        "target" : "141",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.18193496763706207, 0.17748233675956726 ],
        "normalized_max_weight" : 0.019286232704293388,
        "SUID" : 255,
        "name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5283097|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5283097|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "254",
        "source" : "162",
        "target" : "71",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.1819346398115158, 0.17748233675956726 ],
        "normalized_max_weight" : 0.019286232704293388,
        "SUID" : 254,
        "name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5280913|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5280913|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "253",
        "source" : "162",
        "target" : "72",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.11795969307422638, 0.11388608068227768 ],
        "normalized_max_weight" : 0.012375504480729344,
        "SUID" : 253,
        "name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5283455|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5299500|H__sapiens__1_-Hs:5283455|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "333",
        "source" : "156",
        "target" : "125",
        "networks" : [ "I2D-IntAct-Mouse2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.7071067690849304 ],
        "normalized_max_weight" : 0.021762812259435844,
        "SUID" : 333,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5279290|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5279290|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "330",
        "source" : "156",
        "target" : "142",
        "networks" : [ "I2D-BIND-Mouse2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 1.0 ],
        "normalized_max_weight" : 0.05507887303828558,
        "SUID" : 330,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283121|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283121|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "309",
        "source" : "156",
        "target" : "125",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.04433392733335495 ],
        "normalized_max_weight" : 0.003828273071763409,
        "SUID" : 309,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5279290|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5279290|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "308",
        "source" : "156",
        "target" : "142",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.04987141862511635 ],
        "normalized_max_weight" : 0.004306440246937743,
        "SUID" : 308,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283121|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283121|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "198",
        "source" : "156",
        "target" : "63",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.022853726521134377, 0.024693520739674568, 0.021127978339791298 ],
        "normalized_max_weight" : 0.001189049441161597,
        "SUID" : 198,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "197",
        "source" : "156",
        "target" : "71",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.050193995237350464, 0.028980448842048645, 0.038118958473205566 ],
        "normalized_max_weight" : 0.0026115277931345864,
        "SUID" : 197,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "196",
        "source" : "156",
        "target" : "72",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.06017342209815979, 0.03422589600086212, 0.054901670664548874 ],
        "normalized_max_weight" : 0.0031307442946965983,
        "SUID" : 196,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "158",
        "source" : "156",
        "target" : "125",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.16123773157596588, 0.06405233591794968, 0.030905505642294884, 0.04239855706691742 ],
        "normalized_max_weight" : 0.003332559097436534,
        "SUID" : 158,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5279290|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5279290|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "157",
        "source" : "156",
        "target" : "142",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.16991570591926575, 0.055115245282649994, 0.03546645864844322, 0.049264803528785706 ],
        "normalized_max_weight" : 0.002867573983709612,
        "SUID" : 157,
        "name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281807|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "324",
        "source" : "154",
        "target" : "141",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.35459744930267334, 0.28550106287002563 ],
        "normalized_max_weight" : 0.038616627942357144,
        "SUID" : 324,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5283097|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5283097|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "323",
        "source" : "154",
        "target" : "63",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Fly2Human", "I2D-BioGRID-Yeast2Human", "I2D-IntAct-Worm2Human", "I2D-BioGRID-Worm2Human", "I2D-Krogan-Greenblatt-2006-NonCore-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.4608193337917328, 0.3489152789115906, 0.02413078211247921, 0.437252402305603, 0.6077812314033508, 0.6077812314033508, 0.7471169233322144 ],
        "normalized_max_weight" : 0.05018448044867555,
        "SUID" : 323,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280233|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280233|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "322",
        "source" : "154",
        "target" : "71",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.25094401836395264, 0.3489152789115906, 0.2206229716539383 ],
        "normalized_max_weight" : 0.02732848702261587,
        "SUID" : 322,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280913|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280913|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "241",
        "source" : "154",
        "target" : "63",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.170025035738945, 0.11688509583473206 ],
        "normalized_max_weight" : 0.012701394398396428,
        "SUID" : 241,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280233|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280233|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "188",
        "source" : "154",
        "target" : "141",
        "networks" : [ "IREF-GRID", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.05901512876152992, 0.045009247958660126 ],
        "normalized_max_weight" : 0.0030704798103313334,
        "SUID" : 188,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5283097|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5283097|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "187",
        "source" : "154",
        "target" : "62",
        "networks" : [ "IREF-GRID", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.009023545309901237, 0.007701245602220297 ],
        "normalized_max_weight" : 4.694832371478752E-4,
        "SUID" : 187,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5285585|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5285585|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "186",
        "source" : "154",
        "target" : "71",
        "networks" : [ "IREF-GRID", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.023648886010050774, 0.020484909415245056 ],
        "normalized_max_weight" : 0.0012304205473160365,
        "SUID" : 186,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "185",
        "source" : "154",
        "target" : "72",
        "networks" : [ "IREF-GRID", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.02835068851709366, 0.029503842815756798 ],
        "normalized_max_weight" : 0.0014750491700608421,
        "SUID" : 185,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "155",
        "source" : "154",
        "target" : "63",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.24457387626171112, 0.010767526924610138, 0.0647851899266243, 0.011354055255651474 ],
        "normalized_max_weight" : 0.002790870713568688,
        "SUID" : 155,
        "name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284210|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "169",
        "source" : "142",
        "target" : "72",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.0513283796608448, 0.0454205721616745, 0.05678696185350418 ],
        "normalized_max_weight" : 0.002670548328081962,
        "SUID" : 169,
        "name" : "H__sapiens__1_-Hs:5283121|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283121|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "341",
        "source" : "141",
        "target" : "72",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.17241531610488892 ],
        "normalized_max_weight" : 0.0017678639221934307,
        "SUID" : 341,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5283455|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5283455|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "327",
        "source" : "141",
        "target" : "63",
        "networks" : [ "I2D-BIND-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.28550106287002563 ],
        "normalized_max_weight" : 0.018967639527642858,
        "SUID" : 327,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280233|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280233|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "321",
        "source" : "141",
        "target" : "62",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.19072072207927704, 0.1615498811006546, 0.08151029050350189 ],
        "normalized_max_weight" : 0.020770006044647585,
        "SUID" : 321,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5285585|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5285585|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "320",
        "source" : "141",
        "target" : "71",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.27502942085266113, 0.28550106287002563, 0.1247413232922554 ],
        "normalized_max_weight" : 0.029951452947998138,
        "SUID" : 320,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280913|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280913|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "240",
        "source" : "141",
        "target" : "71",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.26311013102531433, 0.26453566551208496 ],
        "normalized_max_weight" : 0.028745938873695663,
        "SUID" : 240,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280913|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280913|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "239",
        "source" : "141",
        "target" : "72",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.17059536278247833, 0.16975143551826477 ],
        "normalized_max_weight" : 0.018446149329936795,
        "SUID" : 239,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5283455|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5283455|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "184",
        "source" : "141",
        "target" : "63",
        "networks" : [ "IREF-GRID", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.04430396109819412, 0.03715292364358902 ],
        "normalized_max_weight" : 0.002305077035744542,
        "SUID" : 184,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "153",
        "source" : "141",
        "target" : "62",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.07006962597370148, 0.03712819144129753, 0.036348018795251846, 0.025200139731168747 ],
        "normalized_max_weight" : 0.0019317311443186162,
        "SUID" : 153,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5285585|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5285585|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "152",
        "source" : "141",
        "target" : "71",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.33973097801208496, 0.09730548411607742, 0.12306223064661026, 0.06703104823827744 ],
        "normalized_max_weight" : 0.005301377920587282,
        "SUID" : 152,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "143",
        "source" : "141",
        "target" : "142",
        "networks" : [ "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.026049526408314705 ],
        "normalized_max_weight" : 7.859061634150704E-4,
        "SUID" : 143,
        "name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5283121|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5283097|H__sapiens__1_-Hs:5283121|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "260",
        "source" : "133",
        "target" : "62",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.4315989911556244, 0.4999985992908478 ],
        "normalized_max_weight" : 0.05433267058460801,
        "SUID" : 260,
        "name" : "H__sapiens__1_-Hs:5288367|H__sapiens__1_-Hs:5285585|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5288367|H__sapiens__1_-Hs:5285585|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "134",
        "source" : "133",
        "target" : "128",
        "networks" : [ "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.003922299016267061 ],
        "normalized_max_weight" : 3.147857209626026E-5,
        "SUID" : 134,
        "name" : "H__sapiens__1_-Hs:5288367|H__sapiens__1_-Hs:5296442|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5288367|H__sapiens__1_-Hs:5296442|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "137",
        "source" : "128",
        "target" : "74",
        "networks" : [ "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.011034085415303707 ],
        "normalized_max_weight" : 3.3289494786237634E-4,
        "SUID" : 137,
        "name" : "H__sapiens__1_-Hs:5296442|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296442|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "336",
        "source" : "125",
        "target" : "109",
        "networks" : [ "I2D-BioGRID-Yeast2Human", "I2D-Krogan-Greenblatt-2006-Core-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.13385947048664093, 0.8716346025466919 ],
        "normalized_max_weight" : 0.07913451782912093,
        "SUID" : 336,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5281121|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5281121|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "317",
        "source" : "125",
        "target" : "142",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-IntAct-Fly2Human", "I2D-IntAct-Mouse2Human", "I2D-BioGRID-Fly2Human", "I2D-BioGRID-Yeast2Human", "I2D-IntAct-Worm2Human", "I2D-BioGRID-Worm2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 1.0, 0.6812500357627869, 0.1365518420934677, 0.7071067690849304, 0.08643778413534164, 0.1012558862566948, 0.7071067690849304, 0.7071067690849304 ],
        "normalized_max_weight" : 0.10890272340733954,
        "SUID" : 317,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283121|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283121|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "306",
        "source" : "125",
        "target" : "142",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.057332634925842285 ],
        "normalized_max_weight" : 0.004950722744896847,
        "SUID" : 306,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283121|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283121|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "277",
        "source" : "125",
        "target" : "71",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.002347176894545555 ],
        "normalized_max_weight" : 7.11829564738646E-5,
        "SUID" : 277,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5280913|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5280913|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "276",
        "source" : "125",
        "target" : "72",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.006699025630950928 ],
        "normalized_max_weight" : 2.0316170077057995E-4,
        "SUID" : 276,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283455|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283455|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "172",
        "source" : "125",
        "target" : "71",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.049758560955524445, 0.033513594418764114, 0.033932700753211975 ],
        "normalized_max_weight" : 0.002588872718086365,
        "SUID" : 172,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "171",
        "source" : "125",
        "target" : "72",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.059651415795087814, 0.03957953304052353, 0.048872318118810654 ],
        "normalized_max_weight" : 0.0031035849908352974,
        "SUID" : 171,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "149",
        "source" : "125",
        "target" : "142",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.30511730909347534, 0.0546371191740036, 0.04101414605975151, 0.043854501098394394 ],
        "normalized_max_weight" : 0.0028426977088594246,
        "SUID" : 149,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "139",
        "source" : "125",
        "target" : "71",
        "networks" : [ "Burington-Shaughnessy-2008", "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.009115713648498058, 0.007999932393431664 ],
        "normalized_max_weight" : 2.7501826436256464E-4,
        "SUID" : 139,
        "name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279290|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "335",
        "source" : "122",
        "target" : "86",
        "networks" : [ "I2D-BioGRID-Fly2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.303769052028656 ],
        "normalized_max_weight" : 2.571875969041417E-4,
        "SUID" : 335,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5296686|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5296686|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "334",
        "source" : "122",
        "target" : "63",
        "networks" : [ "I2D-BioGRID-Fly2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.14154528081417084 ],
        "normalized_max_weight" : 1.1984002446136078E-4,
        "SUID" : 334,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5280233|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5280233|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "302",
        "source" : "122",
        "target" : "65",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.015255771577358246 ],
        "normalized_max_weight" : 4.626625827349784E-4,
        "SUID" : 302,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5291428|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5291428|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "301",
        "source" : "122",
        "target" : "77",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.008910845033824444 ],
        "normalized_max_weight" : 2.702396635132551E-4,
        "SUID" : 301,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5282439|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5282439|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "274",
        "source" : "122",
        "target" : "97",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.14898744225502014, 0.21398672461509705 ],
        "normalized_max_weight" : 0.023253005577378052,
        "SUID" : 274,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5295186|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5295186|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "273",
        "source" : "122",
        "target" : "81",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.15074293315410614, 0.1902356594800949 ],
        "normalized_max_weight" : 0.020672080751100722,
        "SUID" : 273,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5294341|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5294341|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "272",
        "source" : "122",
        "target" : "77",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.11952318251132965, 0.12347084283828735 ],
        "normalized_max_weight" : 0.013417038848211368,
        "SUID" : 272,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5282439|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5282439|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "271",
        "source" : "122",
        "target" : "87",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.07427278161048889, 0.10689587146043777 ],
        "normalized_max_weight" : 0.0116159088828489,
        "SUID" : 271,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5279580|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5279580|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "270",
        "source" : "122",
        "target" : "109",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.0735137090086937, 0.10689587146043777 ],
        "normalized_max_weight" : 0.0116159088828489,
        "SUID" : 270,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5281121|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5281121|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "123",
        "source" : "122",
        "target" : "71",
        "networks" : [ "Kang-Willman-2010" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.008152053691446781 ],
        "normalized_max_weight" : 5.391292865021271E-5,
        "SUID" : 123,
        "name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282366|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "230",
        "source" : "109",
        "target" : "94",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.11999291181564331, 0.1257725954055786 ],
        "normalized_max_weight" : 0.013667160276917941,
        "SUID" : 230,
        "name" : "H__sapiens__1_-Hs:5281121|H__sapiens__1_-Hs:5284736|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281121|H__sapiens__1_-Hs:5284736|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "229",
        "source" : "109",
        "target" : "128",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10385439544916153, 0.1257725954055786 ],
        "normalized_max_weight" : 0.013667160276917941,
        "SUID" : 229,
        "name" : "H__sapiens__1_-Hs:5281121|H__sapiens__1_-Hs:5296442|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5281121|H__sapiens__1_-Hs:5296442|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "342",
        "source" : "108",
        "target" : "162",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.7129737138748169 ],
        "normalized_max_weight" : 0.007310490359596367,
        "SUID" : 342,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5299500|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5299500|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "259",
        "source" : "108",
        "target" : "162",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.20157292485237122, 0.1966870278120041 ],
        "normalized_max_weight" : 0.021373122855808096,
        "SUID" : 259,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5299500|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5299500|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "258",
        "source" : "108",
        "target" : "141",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.2196202576160431, 0.22143642604351044 ],
        "normalized_max_weight" : 0.024062532192528067,
        "SUID" : 258,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5283097|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5283097|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "257",
        "source" : "108",
        "target" : "71",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.21962009370326996, 0.22143642604351044 ],
        "normalized_max_weight" : 0.024062532192528067,
        "SUID" : 257,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5280913|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5280913|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "256",
        "source" : "108",
        "target" : "72",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.14239594340324402, 0.14209352433681488 ],
        "normalized_max_weight" : 0.015440684555812635,
        "SUID" : 256,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5283455|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5283455|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "200",
        "source" : "108",
        "target" : "87",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.05392727628350258, 0.039115674793720245, 0.05472849681973457 ],
        "normalized_max_weight" : 0.0028057655135134167,
        "SUID" : 200,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "163",
        "source" : "108",
        "target" : "162",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.8595324754714966, 0.6338344812393188, 0.6147916316986084, 0.624332070350647 ],
        "normalized_max_weight" : 0.032977577420890296,
        "SUID" : 163,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5299500|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5299500|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "161",
        "source" : "108",
        "target" : "63",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.18811586499214172, 0.03641125187277794, 0.05933530256152153, 0.038618817925453186 ],
        "normalized_max_weight" : 0.0025560958976464055,
        "SUID" : 161,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "110",
        "source" : "108",
        "target" : "109",
        "networks" : [ "Innocenti-Brown-2011" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.016825171187520027 ],
        "normalized_max_weight" : 6.288938122894973E-7,
        "SUID" : 110,
        "name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5281121|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279663|H__sapiens__1_-Hs:5281121|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "315",
        "source" : "103",
        "target" : "156",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.1349741667509079 ],
        "normalized_max_weight" : 0.011655136348984095,
        "SUID" : 315,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5281807|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5281807|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "314",
        "source" : "103",
        "target" : "125",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.15516752004623413 ],
        "normalized_max_weight" : 0.013398849917778188,
        "SUID" : 314,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5279290|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5279290|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "313",
        "source" : "103",
        "target" : "142",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.17454858124256134 ],
        "normalized_max_weight" : 0.015072421359401322,
        "SUID" : 313,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5283121|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5283121|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "220",
        "source" : "103",
        "target" : "125",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.1037452295422554, 0.04909691959619522, 0.08831276744604111 ],
        "normalized_max_weight" : 0.005397728335303337,
        "SUID" : 220,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5279290|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5279290|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "219",
        "source" : "103",
        "target" : "142",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.08926986902952194, 0.056342508643865585, 0.10261461138725281 ],
        "normalized_max_weight" : 0.004644594297737894,
        "SUID" : 219,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "136",
        "source" : "103",
        "target" : "69",
        "networks" : [ "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.014300435781478882 ],
        "normalized_max_weight" : 1.1476873560334711E-4,
        "SUID" : 136,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5279414|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5279414|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "104",
        "source" : "103",
        "target" : "71",
        "networks" : [ "Roth-Zlotnik-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.003696625819429755 ],
        "normalized_max_weight" : 8.537047074145965E-7,
        "SUID" : 104,
        "name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5290990|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "252",
        "source" : "97",
        "target" : "81",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10270464420318604, 0.17406652867794037 ],
        "normalized_max_weight" : 0.018915051713901614,
        "SUID" : 252,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5294341|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5294341|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "251",
        "source" : "97",
        "target" : "77",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.12489939481019974, 0.15210576355457306 ],
        "normalized_max_weight" : 0.016528670994183255,
        "SUID" : 251,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5282439|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5282439|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "250",
        "source" : "97",
        "target" : "87",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.08463994413614273, 0.13168831169605255 ],
        "normalized_max_weight" : 0.01430999540673268,
        "SUID" : 250,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5279580|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5279580|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "249",
        "source" : "97",
        "target" : "109",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.08377490937709808, 0.13168831169605255 ],
        "normalized_max_weight" : 0.01430999540673268,
        "SUID" : 249,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5281121|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5281121|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "248",
        "source" : "97",
        "target" : "94",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.11555685102939606, 0.11964847892522812 ],
        "normalized_max_weight" : 0.013001679205929782,
        "SUID" : 248,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5284736|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5284736|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "247",
        "source" : "97",
        "target" : "128",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10001540929079056, 0.11964847892522812 ],
        "normalized_max_weight" : 0.013001679205929782,
        "SUID" : 247,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5296442|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5296442|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "223",
        "source" : "97",
        "target" : "94",
        "networks" : [ "IREF-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.182309091091156 ],
        "normalized_max_weight" : 0.007853663834587838,
        "SUID" : 223,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5284736|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5284736|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "195",
        "source" : "97",
        "target" : "81",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.2297309935092926, 0.09401755034923553, 0.28986331820487976 ],
        "normalized_max_weight" : 0.011952602530581261,
        "SUID" : 195,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5294341|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5294341|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "194",
        "source" : "97",
        "target" : "77",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.18132998049259186, 0.11715245991945267, 0.2305847406387329 ],
        "normalized_max_weight" : 0.009434361252689809,
        "SUID" : 194,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5282439|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5282439|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "193",
        "source" : "97",
        "target" : "87",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.052030693739652634, 0.02720838040113449, 0.06943318247795105 ],
        "normalized_max_weight" : 0.0027070888092220555,
        "SUID" : 193,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "192",
        "source" : "97",
        "target" : "128",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.20149099826812744, 0.1269974559545517, 0.2561313509941101 ],
        "normalized_max_weight" : 0.010483312586603807,
        "SUID" : 192,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5296442|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5296442|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "129",
        "source" : "97",
        "target" : "128",
        "networks" : [ "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0043296595104038715, 0.020341403782367706, 0.022579913958907127 ],
        "normalized_max_weight" : 6.136938673854248E-4,
        "SUID" : 129,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5296442|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5296442|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "101",
        "source" : "97",
        "target" : "71",
        "networks" : [ "Roth-Zlotnik-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.011553967371582985 ],
        "normalized_max_weight" : 2.668291792637164E-6,
        "SUID" : 101,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "98",
        "source" : "97",
        "target" : "94",
        "networks" : [ "Chen-Brown-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.012124182656407356 ],
        "normalized_max_weight" : 1.0413949483363941E-4,
        "SUID" : 98,
        "name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5284736|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5295186|H__sapiens__1_-Hs:5284736|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "275",
        "source" : "94",
        "target" : "128",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.016433533281087875 ],
        "normalized_max_weight" : 4.983806235388023E-4,
        "SUID" : 275,
        "name" : "H__sapiens__1_-Hs:5284736|H__sapiens__1_-Hs:5296442|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5284736|H__sapiens__1_-Hs:5296442|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "228",
        "source" : "94",
        "target" : "128",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.20959779620170593, 0.23310312628746033 ],
        "normalized_max_weight" : 0.02533030170640858,
        "SUID" : 228,
        "name" : "H__sapiens__1_-Hs:5284736|H__sapiens__1_-Hs:5296442|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5284736|H__sapiens__1_-Hs:5296442|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "338",
        "source" : "87",
        "target" : "63",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.08075643330812454 ],
        "normalized_max_weight" : 8.280377182013301E-4,
        "SUID" : 338,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5280233|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5280233|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "329",
        "source" : "87",
        "target" : "74",
        "networks" : [ "I2D-BIND-Mouse2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.5773502588272095 ],
        "normalized_max_weight" : 0.03179980160456519,
        "SUID" : 329,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "280",
        "source" : "87",
        "target" : "74",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.01490860991179943 ],
        "normalized_max_weight" : 4.5213419274175125E-4,
        "SUID" : 280,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "234",
        "source" : "87",
        "target" : "109",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.13643211126327515, 0.22179476916790009 ],
        "normalized_max_weight" : 0.024101471779481583,
        "SUID" : 234,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5281121|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5281121|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "233",
        "source" : "87",
        "target" : "94",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.12123191356658936, 0.1257725954055786 ],
        "normalized_max_weight" : 0.013667160276917941,
        "SUID" : 233,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5284736|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5284736|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "232",
        "source" : "87",
        "target" : "128",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10492675751447678, 0.1257725954055786 ],
        "normalized_max_weight" : 0.013667160276917941,
        "SUID" : 232,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5296442|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5296442|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "179",
        "source" : "87",
        "target" : "109",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.16236671805381775, 0.05518833175301552, 0.16061727702617645 ],
        "normalized_max_weight" : 0.008447727559293104,
        "SUID" : 179,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5281121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5281121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "178",
        "source" : "87",
        "target" : "94",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.10247605293989182, 0.06643960624933243, 0.10717814415693283 ],
        "normalized_max_weight" : 0.0053316947399341,
        "SUID" : 178,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5284736|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5284736|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "177",
        "source" : "87",
        "target" : "74",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.10395190864801407, 0.2607264816761017, 0.13234056532382965 ],
        "normalized_max_weight" : 0.011231793914408157,
        "SUID" : 177,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "150",
        "source" : "87",
        "target" : "128",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.5778454542160034, 0.06866522878408432, 0.046282172203063965, 0.06943318247795105 ],
        "normalized_max_weight" : 0.003572561868080674,
        "SUID" : 150,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5296442|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5296442|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "140",
        "source" : "87",
        "target" : "128",
        "networks" : [ "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.02321333810687065 ],
        "normalized_max_weight" : 7.003392386360027E-4,
        "SUID" : 140,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5296442|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5296442|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "124",
        "source" : "87",
        "target" : "71",
        "networks" : [ "Alizadeh-Staudt-2000", "Rieger-Chu-2004", "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.006943127606064081, 0.006707862485200167, 0.006803165189921856 ],
        "normalized_max_weight" : 9.434387668350987E-5,
        "SUID" : 124,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "106",
        "source" : "87",
        "target" : "74",
        "networks" : [ "Innocenti-Brown-2011", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.008122173137962818, 0.007965948432683945, 0.014523955062031746 ],
        "normalized_max_weight" : 4.3818323686571495E-4,
        "SUID" : 106,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "95",
        "source" : "87",
        "target" : "94",
        "networks" : [ "Chen-Brown-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.013644094578921795 ],
        "normalized_max_weight" : 1.1719463135606967E-4,
        "SUID" : 95,
        "name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5284736|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279580|H__sapiens__1_-Hs:5284736|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "332",
        "source" : "86",
        "target" : "87",
        "networks" : [ "I2D-BIND-Mouse2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.5773502588272095 ],
        "normalized_max_weight" : 0.03179980160456519,
        "SUID" : 332,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279580|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279580|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "303",
        "source" : "86",
        "target" : "63",
        "networks" : [ "Schadt-Shoemaker-2004" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.007088460493832827 ],
        "normalized_max_weight" : 3.780860231480837E-5,
        "SUID" : 303,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280233|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280233|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "295",
        "source" : "86",
        "target" : "83",
        "networks" : [ "Johnson-Shoemaker-2003", "Schadt-Shoemaker-2004" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.017098046839237213, 0.006797352340072393 ],
        "normalized_max_weight" : 5.185333609809437E-4,
        "SUID" : 295,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5286824|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5286824|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "294",
        "source" : "86",
        "target" : "125",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.0053423428907990456 ],
        "normalized_max_weight" : 1.6201751233489218E-4,
        "SUID" : 294,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279290|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279290|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "293",
        "source" : "86",
        "target" : "71",
        "networks" : [ "Johnson-Shoemaker-2003", "Schadt-Shoemaker-2004" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.009226313792169094, 0.0065203094854950905 ],
        "normalized_max_weight" : 2.7980690105137816E-4,
        "SUID" : 293,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280913|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280913|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "292",
        "source" : "86",
        "target" : "128",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.013921217061579227 ],
        "normalized_max_weight" : 4.2218947811748853E-4,
        "SUID" : 292,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5296442|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5296442|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "218",
        "source" : "86",
        "target" : "69",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.029662752524018288, 0.025365762412548065, 0.025038395076990128 ],
        "normalized_max_weight" : 0.0015433141408855888,
        "SUID" : 218,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279414|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279414|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "217",
        "source" : "86",
        "target" : "65",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.050969552248716354, 0.05450451374053955, 0.037109266966581345 ],
        "normalized_max_weight" : 0.0026518790080710553,
        "SUID" : 217,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5291428|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5291428|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "216",
        "source" : "86",
        "target" : "156",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.04097209498286247, 0.024387497454881668, 0.030565155670046806 ],
        "normalized_max_weight" : 0.0021317244081633614,
        "SUID" : 216,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5281807|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5281807|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "215",
        "source" : "86",
        "target" : "97",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.06298220902681351, 0.04076141119003296, 0.07087958604097366 ],
        "normalized_max_weight" : 0.0032768817976884706,
        "SUID" : 215,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5295186|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5295186|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "214",
        "source" : "86",
        "target" : "125",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.04061666131019592, 0.028202207759022713, 0.027208466082811356 ],
        "normalized_max_weight" : 0.002113231659969173,
        "SUID" : 214,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279290|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279290|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "213",
        "source" : "86",
        "target" : "71",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.0318288579583168, 0.026445534080266953, 0.02446211315691471 ],
        "normalized_max_weight" : 0.0016560137679581326,
        "SUID" : 213,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "212",
        "source" : "86",
        "target" : "142",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.03494950383901596, 0.03236421197652817, 0.031614746898412704 ],
        "normalized_max_weight" : 0.0018183768835348035,
        "SUID" : 212,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "211",
        "source" : "86",
        "target" : "72",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.03815697878599167, 0.031232159584760666, 0.035232096910476685 ],
        "normalized_max_weight" : 0.0019852576016406395,
        "SUID" : 211,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "210",
        "source" : "86",
        "target" : "128",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.0831180214881897, 0.06933622807264328, 0.07087958604097366 ],
        "normalized_max_weight" : 0.004324521732138236,
        "SUID" : 210,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5296442|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5296442|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "165",
        "source" : "86",
        "target" : "87",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.1402103304862976, 0.021463431417942047, 0.014854837208986282, 0.019214339554309845 ],
        "normalized_max_weight" : 0.0011167142089196348,
        "SUID" : 165,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "164",
        "source" : "86",
        "target" : "63",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.10620902478694916, 0.014491931535303593, 0.022533582523465157, 0.013558476231992245 ],
        "normalized_max_weight" : 9.707205552341426E-4,
        "SUID" : 164,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "147",
        "source" : "86",
        "target" : "72",
        "networks" : [ "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.011832223273813725 ],
        "normalized_max_weight" : 1.4787681551701196E-4,
        "SUID" : 147,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5283455|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5283455|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "135",
        "source" : "86",
        "target" : "125",
        "networks" : [ "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.012518366798758507 ],
        "normalized_max_weight" : 1.0046666767828074E-4,
        "SUID" : 135,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279290|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279290|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "119",
        "source" : "86",
        "target" : "63",
        "networks" : [ "Kang-Willman-2010" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.00484224408864975 ],
        "normalized_max_weight" : 3.202377829432044E-5,
        "SUID" : 119,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280233|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280233|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "118",
        "source" : "86",
        "target" : "71",
        "networks" : [ "Kang-Willman-2010", "Rieger-Chu-2004", "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.005001578480005264, 0.005533942021429539, 0.00698672654107213 ],
        "normalized_max_weight" : 8.73187437282803E-5,
        "SUID" : 118,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "111",
        "source" : "86",
        "target" : "74",
        "networks" : [ "Innocenti-Brown-2011" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.013303428888320923 ],
        "normalized_max_weight" : 4.972575920240344E-7,
        "SUID" : 111,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "90",
        "source" : "86",
        "target" : "83",
        "networks" : [ "Wang-Maris-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.011226092465221882 ],
        "normalized_max_weight" : 4.02930511124885E-5,
        "SUID" : 90,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5286824|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5286824|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "89",
        "source" : "86",
        "target" : "65",
        "networks" : [ "Wang-Maris-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.007585135288536549 ],
        "normalized_max_weight" : 2.7224810843396402E-5,
        "SUID" : 89,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5291428|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5291428|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "88",
        "source" : "86",
        "target" : "87",
        "networks" : [ "Wang-Maris-2006", "Innocenti-Brown-2011", "Kang-Willman-2010" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.014475450851023197, 0.014119288884103298, 0.01622955873608589 ],
        "normalized_max_weight" : 1.0733283602892317E-4,
        "SUID" : 88,
        "name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279580|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5296686|H__sapiens__1_-Hs:5279580|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "331",
        "source" : "83",
        "target" : "87",
        "networks" : [ "I2D-BIND-Mouse2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.5773502588272095 ],
        "normalized_max_weight" : 0.03179980160456519,
        "SUID" : 331,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "311",
        "source" : "83",
        "target" : "87",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.2603825628757477 ],
        "normalized_max_weight" : 0.022484260108939325,
        "SUID" : 311,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "310",
        "source" : "83",
        "target" : "94",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.3404516577720642 ],
        "normalized_max_weight" : 0.029398295889419803,
        "SUID" : 310,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5284736|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5284736|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "288",
        "source" : "83",
        "target" : "65",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.010138713754713535 ],
        "normalized_max_weight" : 3.074773024478316E-4,
        "SUID" : 288,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5291428|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5291428|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "287",
        "source" : "83",
        "target" : "125",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.0040321010164916515 ],
        "normalized_max_weight" : 1.2228173846723245E-4,
        "SUID" : 287,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279290|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279290|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "286",
        "source" : "83",
        "target" : "128",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.009105055592954159 ],
        "normalized_max_weight" : 2.761294973001423E-4,
        "SUID" : 286,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5296442|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5296442|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "224",
        "source" : "83",
        "target" : "109",
        "networks" : [ "IREF-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.07077880203723907 ],
        "normalized_max_weight" : 0.0030490685598195187,
        "SUID" : 224,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5281121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5281121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "199",
        "source" : "83",
        "target" : "154",
        "networks" : [ "IREF-GRID", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.018312273547053337, 0.01599881984293461 ],
        "normalized_max_weight" : 9.527635944792637E-4,
        "SUID" : 199,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5284210|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5284210|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "160",
        "source" : "83",
        "target" : "87",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.12189824879169464, 0.020360775291919708, 0.01271678414195776, 0.01871516741812229 ],
        "normalized_max_weight" : 0.0010593444557098991,
        "SUID" : 160,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "132",
        "source" : "83",
        "target" : "65",
        "networks" : [ "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.010490176267921925 ],
        "normalized_max_weight" : 8.418934114475859E-5,
        "SUID" : 132,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5291428|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5291428|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "126",
        "source" : "83",
        "target" : "125",
        "networks" : [ "Alizadeh-Staudt-2000" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.015972591936588287 ],
        "normalized_max_weight" : 2.1703709473312562E-4,
        "SUID" : 126,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279290|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279290|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "107",
        "source" : "83",
        "target" : "87",
        "networks" : [ "Innocenti-Brown-2011" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.009538648650050163 ],
        "normalized_max_weight" : 3.5653706264039E-7,
        "SUID" : 107,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5279580|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "85",
        "source" : "83",
        "target" : "62",
        "networks" : [ "Wang-Maris-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.007568746339529753 ],
        "normalized_max_weight" : 2.7165987102004947E-5,
        "SUID" : 85,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5285585|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5285585|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "84",
        "source" : "83",
        "target" : "74",
        "networks" : [ "Wang-Maris-2006", "Roth-Zlotnik-2006", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.010388502851128578, 0.014095569029450417, 0.008791790343821049, 0.009531164541840553 ],
        "normalized_max_weight" : 2.8755228945600924E-4,
        "SUID" : 84,
        "name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5286824|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "246",
        "source" : "81",
        "target" : "77",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.12637169659137726, 0.13522295653820038 ],
        "normalized_max_weight" : 0.014694089870425944,
        "SUID" : 246,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5282439|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5282439|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "245",
        "source" : "81",
        "target" : "87",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10928724706172943, 0.1875777393579483 ],
        "normalized_max_weight" : 0.0203832561451086,
        "SUID" : 245,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5279580|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5279580|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "244",
        "source" : "81",
        "target" : "109",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10817031562328339, 0.1875777393579483 ],
        "normalized_max_weight" : 0.0203832561451086,
        "SUID" : 244,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5281121|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5281121|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "243",
        "source" : "81",
        "target" : "94",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.11691879481077194, 0.10636690258979797 ],
        "normalized_max_weight" : 0.011558428139025323,
        "SUID" : 243,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5284736|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5284736|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "242",
        "source" : "81",
        "target" : "128",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.10119376331567764, 0.10636690258979797 ],
        "normalized_max_weight" : 0.011558428139025323,
        "SUID" : 242,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5296442|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5296442|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "191",
        "source" : "81",
        "target" : "77",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.27284175157546997, 0.14752864837646484, 0.26095226407051086 ],
        "normalized_max_weight" : 0.0141955987762586,
        "SUID" : 191,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5282439|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5282439|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "190",
        "source" : "81",
        "target" : "87",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.07828901708126068, 0.03426317870616913, 0.07857738435268402 ],
        "normalized_max_weight" : 0.004073274961240024,
        "SUID" : 190,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "189",
        "source" : "81",
        "target" : "128",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.3031774163246155, 0.15992633998394012, 0.28986331820487976 ],
        "normalized_max_weight" : 0.01577392365836831,
        "SUID" : 189,
        "name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5296442|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5294341|H__sapiens__1_-Hs:5296442|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "284",
        "source" : "77",
        "target" : "74",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.00554632768034935 ],
        "normalized_max_weight" : 1.6820376971908522E-4,
        "SUID" : 284,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5282789|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5282789|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "238",
        "source" : "77",
        "target" : "87",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.1310335397720337, 0.15989062190055847 ],
        "normalized_max_weight" : 0.017374617652154232,
        "SUID" : 238,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5279580|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5279580|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "237",
        "source" : "77",
        "target" : "109",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.1296943575143814, 0.15989062190055847 ],
        "normalized_max_weight" : 0.017374617652154232,
        "SUID" : 237,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5281121|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5281121|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "236",
        "source" : "77",
        "target" : "94",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.1950019747018814, 0.14527468383312225 ],
        "normalized_max_weight" : 0.01578636730619455,
        "SUID" : 236,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5284736|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5284736|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "235",
        "source" : "77",
        "target" : "128",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.1687961220741272, 0.14527468383312225 ],
        "normalized_max_weight" : 0.01578636730619455,
        "SUID" : 235,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5296442|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5296442|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "183",
        "source" : "77",
        "target" : "87",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.06179464980959892, 0.042694322764873505, 0.06250789761543274 ],
        "normalized_max_weight" : 0.0032150946479092223,
        "SUID" : 183,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5279580|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5279580|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "182",
        "source" : "77",
        "target" : "94",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.35713499784469604, 0.2860722839832306, 0.3559342324733734 ],
        "normalized_max_weight" : 0.01858126591362597,
        "SUID" : 182,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5284736|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5284736|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "181",
        "source" : "77",
        "target" : "128",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.23930232226848602, 0.19927941262722015, 0.2305847406387329 ],
        "normalized_max_weight" : 0.01245058622272741,
        "SUID" : 181,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5296442|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5296442|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "116",
        "source" : "77",
        "target" : "63",
        "networks" : [ "Kang-Willman-2010", "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.011176899075508118, 0.01118620578199625 ],
        "normalized_max_weight" : 8.977535464068168E-5,
        "SUID" : 116,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5280233|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5280233|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "100",
        "source" : "77",
        "target" : "71",
        "networks" : [ "Roth-Zlotnik-2006", "Kang-Willman-2010", "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.014260176569223404, 0.011341518722474575, 0.011045072227716446 ],
        "normalized_max_weight" : 8.86426814953725E-5,
        "SUID" : 100,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "79",
        "source" : "77",
        "target" : "62",
        "networks" : [ "Wang-Maris-2006", "Chen-Brown-2002", "Arijs-Rutgeerts-2009", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.008830600418150425, 0.005559437442570925, 0.009138229303061962, 0.017577677965164185 ],
        "normalized_max_weight" : 1.8758613243148562E-4,
        "SUID" : 79,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5285585|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5285585|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "78",
        "source" : "77",
        "target" : "74",
        "networks" : [ "Wang-Maris-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.012956785038113594 ],
        "normalized_max_weight" : 4.6504908400816266E-5,
        "SUID" : 78,
        "name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282439|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "138",
        "source" : "72",
        "target" : "74",
        "networks" : [ "Burington-Shaughnessy-2008", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.013292651623487473, 0.014868023805320263 ],
        "normalized_max_weight" : 4.010351925512802E-4,
        "SUID" : 138,
        "name" : "H__sapiens__1_-Hs:5283455|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5283455|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "316",
        "source" : "71",
        "target" : "72",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Worm2Human", "I2D-BioGRID-Yeast2Human", "I2D-vonMering-Bork-2002-High-Yeast2Human", "I2D-IntAct-Worm2Human", "I2D-Krogan-Greenblatt-2006-Core-Yeast2Human", "I2D-BioGRID-Worm2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.38926953077316284, 1.0, 0.0597471259534359, 1.0, 1.0, 0.7341316938400269, 1.0 ],
        "normalized_max_weight" : 0.08260972953832166,
        "SUID" : 316,
        "name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "231",
        "source" : "71",
        "target" : "72",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.17059533298015594, 0.16975143551826477 ],
        "normalized_max_weight" : 0.018446149329936795,
        "SUID" : 231,
        "name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "170",
        "source" : "71",
        "target" : "142",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.042815856635570526, 0.03845943883061409, 0.03942793980240822 ],
        "normalized_max_weight" : 0.002227652910710213,
        "SUID" : 170,
        "name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "148",
        "source" : "71",
        "target" : "72",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.29067155718803406, 0.04674525931477547, 0.037114184349775314, 0.04393927752971649 ],
        "normalized_max_weight" : 0.0024320945826400305,
        "SUID" : 148,
        "name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "127",
        "source" : "71",
        "target" : "74",
        "networks" : [ "Arijs-Rutgeerts-2009", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.003766627749428153, 0.004697107709944248 ],
        "normalized_max_weight" : 5.012677275512505E-5,
        "SUID" : 127,
        "name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "73",
        "source" : "71",
        "target" : "72",
        "networks" : [ "Wang-Maris-2006", "Innocenti-Brown-2011", "Kang-Willman-2010", "Burington-Shaughnessy-2008", "Rieger-Chu-2004", "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.016269955784082413, 0.01784456893801689, 0.00779074477031827, 0.014160930179059505, 0.010872180573642254, 0.00782544631510973 ],
        "normalized_max_weight" : 4.272308883074758E-4,
        "SUID" : 73,
        "name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5280913|H__sapiens__1_-Hs:5283455|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "326",
        "source" : "69",
        "target" : "62",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.47881391644477844, 0.17000006139278412, 0.04431562125682831 ],
        "normalized_max_weight" : 0.052144139506170695,
        "SUID" : 326,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5285585|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5285585|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "290",
        "source" : "69",
        "target" : "156",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.017707867547869682 ],
        "normalized_max_weight" : 5.370274255145207E-4,
        "SUID" : 290,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5281807|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5281807|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "289",
        "source" : "69",
        "target" : "62",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.006646269001066685 ],
        "normalized_max_weight" : 2.0156174769610794E-4,
        "SUID" : 289,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5285585|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5285585|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "261",
        "source" : "69",
        "target" : "156",
        "networks" : [ "INTERPRO", "PFAM" ],
        "selected" : false,
        "data_type" : "Shared protein domains",
        "raw_weights" : [ 0.013556120917201042, 0.022807899862527847 ],
        "normalized_max_weight" : 0.002478435163048536,
        "SUID" : 261,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5281807|Shared protein domains",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5281807|Shared protein domains"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "207",
        "source" : "69",
        "target" : "156",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.046778060495853424, 0.02779717743396759, 0.0390169695019722 ],
        "normalized_max_weight" : 0.002433801185105677,
        "SUID" : 207,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5281807|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5281807|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "206",
        "source" : "69",
        "target" : "62",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.013865691609680653, 0.008903110399842262, 0.011739450506865978 ],
        "normalized_max_weight" : 7.214137635086861E-4,
        "SUID" : 206,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5285585|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5285585|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "205",
        "source" : "69",
        "target" : "63",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.01654551550745964, 0.025684062391519547, 0.017307637259364128 ],
        "normalized_max_weight" : 0.001106439567672004,
        "SUID" : 205,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5280233|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5280233|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "204",
        "source" : "69",
        "target" : "125",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.04637225717306137, 0.03214523196220398, 0.034732092171907425 ],
        "normalized_max_weight" : 0.002412687770024719,
        "SUID" : 204,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5279290|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5279290|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "203",
        "source" : "69",
        "target" : "71",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.0363391749560833, 0.030142953619360924, 0.031226323917508125 ],
        "normalized_max_weight" : 0.0018906796505964141,
        "SUID" : 203,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "202",
        "source" : "69",
        "target" : "142",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.039902035146951675, 0.03688913956284523, 0.04035678878426552 ],
        "normalized_max_weight" : 0.0020760505972107985,
        "SUID" : 202,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "201",
        "source" : "69",
        "target" : "72",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.043564021587371826, 0.03559881076216698, 0.04497440159320831 ],
        "normalized_max_weight" : 0.0022665789526847397,
        "SUID" : 201,
        "name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5279414|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "346",
        "source" : "68",
        "target" : "69",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.12042930722236633 ],
        "normalized_max_weight" : 0.0012348243312888213,
        "SUID" : 346,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279414|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279414|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "345",
        "source" : "68",
        "target" : "65",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.2951207458972931 ],
        "normalized_max_weight" : 0.0030260265221753427,
        "SUID" : 345,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5291428|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5291428|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "344",
        "source" : "68",
        "target" : "62",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.05015693977475166 ],
        "normalized_max_weight" : 5.142851939062614E-4,
        "SUID" : 344,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5285585|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5285585|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "305",
        "source" : "68",
        "target" : "86",
        "networks" : [ "Schadt-Shoemaker-2004" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.006712143775075674 ],
        "normalized_max_weight" : 3.5801395083240725E-5,
        "SUID" : 305,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5296686|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5296686|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "304",
        "source" : "68",
        "target" : "83",
        "networks" : [ "Schadt-Shoemaker-2004" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.008447015658020973 ],
        "normalized_max_weight" : 4.505489676339956E-5,
        "SUID" : 304,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5286824|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5286824|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "222",
        "source" : "68",
        "target" : "125",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.30179691314697266, 0.17664660513401031, 0.24549265205860138 ],
        "normalized_max_weight" : 0.015702097887180404,
        "SUID" : 222,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279290|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279290|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "168",
        "source" : "68",
        "target" : "62",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.22397449612617493, 0.09023980051279068, 0.04892496392130852, 0.08297654241323471 ],
        "normalized_max_weight" : 0.004695058561720366,
        "SUID" : 168,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5285585|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5285585|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "146",
        "source" : "68",
        "target" : "77",
        "networks" : [ "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.015041422098875046 ],
        "normalized_max_weight" : 1.605196205886398E-4,
        "SUID" : 146,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5282439|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5282439|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "145",
        "source" : "68",
        "target" : "72",
        "networks" : [ "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.018916266039013863 ],
        "normalized_max_weight" : 5.706979019823942E-4,
        "SUID" : 145,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5283455|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5283455|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "121",
        "source" : "68",
        "target" : "62",
        "networks" : [ "Kang-Willman-2010", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0059255314990878105, 0.007132341153919697, 0.008965079672634602, 0.012827073223888874 ],
        "normalized_max_weight" : 2.7047368385099647E-4,
        "SUID" : 121,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5285585|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5285585|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "120",
        "source" : "68",
        "target" : "63",
        "networks" : [ "Kang-Willman-2010" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.003901745891198516 ],
        "normalized_max_weight" : 2.5803871736535835E-5,
        "SUID" : 120,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5280233|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5280233|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "113",
        "source" : "68",
        "target" : "87",
        "networks" : [ "Innocenti-Brown-2011", "Kang-Willman-2010", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0064072320237755775, 0.010300619527697563, 0.013861660845577717 ],
        "normalized_max_weight" : 1.479293995630209E-4,
        "SUID" : 113,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279580|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279580|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "112",
        "source" : "68",
        "target" : "71",
        "networks" : [ "Innocenti-Brown-2011", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.008205410093069077, 0.006163295358419418 ],
        "normalized_max_weight" : 1.859447167370859E-4,
        "SUID" : 112,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "105",
        "source" : "68",
        "target" : "74",
        "networks" : [ "Roth-Zlotnik-2006", "Kang-Willman-2010", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.00965545792132616, 0.006573808845132589, 0.00839369185268879 ],
        "normalized_max_weight" : 2.532350898605744E-4,
        "SUID" : 105,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "93",
        "source" : "68",
        "target" : "86",
        "networks" : [ "Wang-Maris-2006", "Alizadeh-Staudt-2000", "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.008204354904592037, 0.014504978433251381, 0.008820836432278156 ],
        "normalized_max_weight" : 1.970950232008466E-4,
        "SUID" : 93,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5296686|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5296686|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "92",
        "source" : "68",
        "target" : "83",
        "networks" : [ "Wang-Maris-2006", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0071724518202245235, 0.013649321161210537 ],
        "normalized_max_weight" : 4.1179580230691433E-4,
        "SUID" : 92,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5286824|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5286824|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "91",
        "source" : "68",
        "target" : "81",
        "networks" : [ "Wang-Maris-2006" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.010804860852658749 ],
        "normalized_max_weight" : 3.878115309919641E-5,
        "SUID" : 91,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5294341|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5294341|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "70",
        "source" : "68",
        "target" : "69",
        "networks" : [ "Perou-Botstein-2000" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.021772032603621483 ],
        "normalized_max_weight" : 5.240859466124306E-6,
        "SUID" : 70,
        "name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279414|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5282028|H__sapiens__1_-Hs:5279414|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "325",
        "source" : "65",
        "target" : "62",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human", "I2D-Krogan-Greenblatt-2006-Core-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.47881391644477844, 0.35916462540626526, 0.10859863460063934, 0.7760536670684814 ],
        "normalized_max_weight" : 0.07045685494076706,
        "SUID" : 325,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5285585|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5285585|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "285",
        "source" : "65",
        "target" : "125",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.003065116936340928 ],
        "normalized_max_weight" : 9.295596168055533E-5,
        "SUID" : 285,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5279290|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5279290|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "159",
        "source" : "65",
        "target" : "62",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.15253159403800964, 0.02382543869316578, 0.01913050189614296, 0.017398973926901817 ],
        "normalized_max_weight" : 0.001239606352046803,
        "SUID" : 159,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5285585|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5285585|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "144",
        "source" : "65",
        "target" : "125",
        "networks" : [ "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.010225428268313408 ],
        "normalized_max_weight" : 3.084980115823191E-4,
        "SUID" : 144,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5279290|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5279290|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "131",
        "source" : "65",
        "target" : "87",
        "networks" : [ "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.010844521224498749 ],
        "normalized_max_weight" : 8.70331511695143E-5,
        "SUID" : 131,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5279580|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5279580|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "130",
        "source" : "65",
        "target" : "72",
        "networks" : [ "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.009552528150379658 ],
        "normalized_max_weight" : 7.666420760788005E-5,
        "SUID" : 130,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5283455|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5283455|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "117",
        "source" : "65",
        "target" : "71",
        "networks" : [ "Kang-Willman-2010", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0055119735188782215, 0.0046419440768659115, 0.004744500387459993, 0.00344564369879663 ],
        "normalized_max_weight" : 1.4314011081751683E-4,
        "SUID" : 117,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "102",
        "source" : "65",
        "target" : "74",
        "networks" : [ "Roth-Zlotnik-2006", "Arijs-Rutgeerts-2009", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.013464078307151794, 0.004128778353333473, 0.003929656930267811 ],
        "normalized_max_weight" : 4.1936662327778485E-5,
        "SUID" : 102,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "99",
        "source" : "65",
        "target" : "97",
        "networks" : [ "Chen-Brown-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0047075324691832066 ],
        "normalized_max_weight" : 4.04348950479242E-5,
        "SUID" : 99,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5295186|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5295186|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "82",
        "source" : "65",
        "target" : "81",
        "networks" : [ "Wang-Maris-2006", "Rieger-Chu-2004" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.008569049648940563, 0.0060218567959964275 ],
        "normalized_max_weight" : 6.426428045023502E-5,
        "SUID" : 82,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5294341|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5294341|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "80",
        "source" : "65",
        "target" : "77",
        "networks" : [ "Wang-Maris-2006", "Chen-Brown-2002", "Kang-Willman-2010", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.007587651256471872, 0.0035824531223624945, 0.015781721100211143, 0.009196155704557896, 0.010334937833249569 ],
        "normalized_max_weight" : 3.118018813221068E-4,
        "SUID" : 80,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5282439|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5282439|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "67",
        "source" : "65",
        "target" : "62",
        "networks" : [ "Perou-Botstein-2000", "Wang-Maris-2006", "Chen-Brown-2002", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.003231444861739874, 0.005370500963181257, 0.0032317822333425283, 0.004700632765889168, 0.007113774307072163 ],
        "normalized_max_weight" : 2.1462037295569714E-4,
        "SUID" : 67,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5285585|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5285585|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "66",
        "source" : "65",
        "target" : "63",
        "networks" : [ "Perou-Botstein-2000", "Chen-Brown-2002", "Kang-Willman-2010", "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.005842573009431362, 0.0049351598136126995, 0.004695619456470013, 0.005641106516122818 ],
        "normalized_max_weight" : 4.5272932388376836E-5,
        "SUID" : 66,
        "name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5280233|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5291428|H__sapiens__1_-Hs:5280233|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "337",
        "source" : "63",
        "target" : "72",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.11841275542974472 ],
        "normalized_max_weight" : 0.0012141475767988579,
        "SUID" : 337,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5283455|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5283455|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "318",
        "source" : "63",
        "target" : "71",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.35741621255874634, 0.3489152789115906, 0.0856708362698555 ],
        "normalized_max_weight" : 0.03892359893758403,
        "SUID" : 318,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "279",
        "source" : "63",
        "target" : "125",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.005231331568211317 ],
        "normalized_max_weight" : 1.5865086614719683E-4,
        "SUID" : 279,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5279290|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5279290|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "278",
        "source" : "63",
        "target" : "71",
        "networks" : [ "Johnson-Shoemaker-2003", "Schadt-Shoemaker-2004" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.008905782364308834, 0.01475009135901928 ],
        "normalized_max_weight" : 2.700861276700007E-4,
        "SUID" : 278,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "176",
        "source" : "63",
        "target" : "125",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.022655470296740532, 0.0285560991615057, 0.018807685002684593 ],
        "normalized_max_weight" : 0.0012301635749447327,
        "SUID" : 176,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5279290|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5279290|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "175",
        "source" : "63",
        "target" : "71",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.017753740772604942, 0.02677738480269909, 0.016909286379814148 ],
        "normalized_max_weight" : 0.0011535386269061472,
        "SUID" : 175,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "174",
        "source" : "63",
        "target" : "142",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.019494399428367615, 0.03277033194899559, 0.021853500977158546 ],
        "normalized_max_weight" : 0.0014117078272667127,
        "SUID" : 174,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5283121|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5283121|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "173",
        "source" : "63",
        "target" : "72",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.02128348872065544, 0.03162407502532005, 0.02435397356748581 ],
        "normalized_max_weight" : 0.0013623284107344058,
        "SUID" : 173,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "114",
        "source" : "63",
        "target" : "71",
        "networks" : [ "Kang-Willman-2010" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.0037321830168366432 ],
        "normalized_max_weight" : 2.4682481778470652E-5,
        "SUID" : 114,
        "name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5280233|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "340",
        "source" : "62",
        "target" : "63",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.05598028004169464 ],
        "normalized_max_weight" : 5.73994930820364E-4,
        "SUID" : 340,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280233|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280233|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "339",
        "source" : "62",
        "target" : "71",
        "networks" : [ "I2D-BioGRID-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.028245780616998672 ],
        "normalized_max_weight" : 2.896186814204178E-4,
        "SUID" : 339,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280913|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280913|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "319",
        "source" : "62",
        "target" : "72",
        "networks" : [ "I2D-Yu-Vidal-2008-GoldStd-Yeast2Human", "I2D-BIND-Yeast2Human", "I2D-BioGRID-Yeast2Human", "I2D-Krogan-Greenblatt-2006-NonCore-Yeast2Human" ],
        "selected" : false,
        "data_type" : "Predicted",
        "raw_weights" : [ 0.26994118094444275, 0.5231144428253174, 0.039040833711624146, 0.6417061686515808 ],
        "normalized_max_weight" : 0.03475379770383363,
        "SUID" : 319,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Predicted",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Predicted"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "307",
        "source" : "62",
        "target" : "87",
        "networks" : [ "PATHWAYCOMMONS-NCI_NATURE" ],
        "selected" : false,
        "data_type" : "Pathway",
        "raw_weights" : [ 0.36705121397972107 ],
        "normalized_max_weight" : 0.03169519063517397,
        "SUID" : 307,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5279580|Pathway",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5279580|Pathway"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "283",
        "source" : "62",
        "target" : "87",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.010272949934005737 ],
        "normalized_max_weight" : 3.115482900798161E-4,
        "SUID" : 283,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5279580|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5279580|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "282",
        "source" : "62",
        "target" : "72",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.01088433526456356 ],
        "normalized_max_weight" : 3.300898049843768E-4,
        "SUID" : 282,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "281",
        "source" : "62",
        "target" : "74",
        "networks" : [ "Johnson-Shoemaker-2003" ],
        "selected" : false,
        "data_type" : "Co-localization",
        "raw_weights" : [ 0.005523486528545618 ],
        "normalized_max_weight" : 1.675110649133945E-4,
        "SUID" : 281,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5282789|Co-localization",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5282789|Co-localization"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "180",
        "source" : "62",
        "target" : "71",
        "networks" : [ "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.0148782255128026, 0.009282099083065987, 0.01146925613284111 ],
        "normalized_max_weight" : 7.740945755657897E-4,
        "SUID" : 180,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280913|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280913|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "151",
        "source" : "62",
        "target" : "72",
        "networks" : [ "IREF-BIND", "IREF-GRID", "IREF-SMALL-SCALE-STUDIES", "BIOGRID-SMALL-SCALE-STUDIES" ],
        "selected" : false,
        "data_type" : "Physical interactions",
        "raw_weights" : [ 0.05995110422372818, 0.017836272716522217, 0.010962153784930706, 0.01651884987950325 ],
        "normalized_max_weight" : 9.279978950642436E-4,
        "SUID" : 151,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Physical interactions",
        "highlight" : 1,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Physical interactions"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "115",
        "source" : "62",
        "target" : "72",
        "networks" : [ "Kang-Willman-2010", "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.010180401615798473, 0.009063455276191235 ],
        "normalized_max_weight" : 7.273913313838752E-5,
        "SUID" : 115,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5283455|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "96",
        "source" : "62",
        "target" : "87",
        "networks" : [ "Chen-Brown-2002", "Alizadeh-Staudt-2000", "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.009646126069128513, 0.007874829694628716, 0.006237672176212072 ],
        "normalized_max_weight" : 1.0700393306394264E-4,
        "SUID" : 96,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5279580|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5279580|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "76",
        "source" : "62",
        "target" : "71",
        "networks" : [ "Wang-Maris-2006", "Kang-Willman-2010", "Alizadeh-Staudt-2000", "Arijs-Rutgeerts-2009", "Burington-Shaughnessy-2008", "Boldrick-Relman-2002" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.00837816670536995, 0.0047034649178385735, 0.014208576641976833, 0.0051415544003248215, 0.006635467056185007, 0.00395435793325305 ],
        "normalized_max_weight" : 2.0018999097538024E-4,
        "SUID" : 76,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280913|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280913|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "75",
        "source" : "62",
        "target" : "74",
        "networks" : [ "Wang-Maris-2006", "Roth-Zlotnik-2006", "Kang-Willman-2010", "Arijs-Rutgeerts-2009" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.00801911111921072, 0.006974725052714348, 0.006865291390568018, 0.0038725680205971003 ],
        "normalized_max_weight" : 4.5403033261539396E-5,
        "SUID" : 75,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5282789|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5282789|Co-expression"
      },
      "selected" : false
    }, {
      "data" : {
        "id" : "64",
        "source" : "62",
        "target" : "63",
        "networks" : [ "Perou-Botstein-2000" ],
        "selected" : false,
        "data_type" : "Co-expression",
        "raw_weights" : [ 0.003993421792984009 ],
        "normalized_max_weight" : 9.612773775888105E-7,
        "SUID" : 64,
        "name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280233|Co-expression",
        "highlight" : 0,
        "shared_name" : "H__sapiens__1_-Hs:5285585|H__sapiens__1_-Hs:5280233|Co-expression"
      },
      "selected" : false
    } ]
  }
};