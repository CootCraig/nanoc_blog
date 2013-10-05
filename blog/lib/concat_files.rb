def concat_files(files)
  files.collect do |f|
    item = @items.find {|i| i.identifier =~ /#{f}\/$/}
    if item
      puts "concat_files item.identifier #{item.identifier}"
      item.compiled_content
    else
      puts "WARNING: couldn't find file #{f}"
    end
  end.compact.join("\n")
end

